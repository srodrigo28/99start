from werkzeug.security import generate_password_hash

from app.modules.auth.repository import AuthRepository, RevokedTokenRepository
from app.modules.auth.service import AuthService
from app.modules.establishments.repository import EstablishmentRepository


def test_register_owner_rejects_duplicate_email(app) -> None:
    with app.app_context():
        auth_repository = AuthRepository()
        establishment_repository = EstablishmentRepository()
        service = AuthService(
            repository=auth_repository,
            establishment_repository=establishment_repository,
        )

        payload = {
            'owner_name': 'Jose',
            'email': 'jose@example.com',
            'password': 'Senha@123',
            'establishment_name': 'Espeto do Jose',
            'cnpj': '12.345.678/0001-90',
            'phone': '(62) 98888-0000',
        }

        service.register_owner(payload)

        try:
            service.register_owner(payload)
            assert False, 'Era esperado erro para e-mail duplicado.'
        except ValueError as exc:
            assert 'e-mail' in str(exc)


def test_login_accepts_valid_password(app) -> None:
    with app.app_context():
        auth_repository = AuthRepository()
        establishment_repository = EstablishmentRepository()
        establishment = establishment_repository.create(
            {
                'name': 'Boteco Central',
                'cnpj': '99.888.777/0001-66',
                'phone': '(62) 98888-0000',
                'owner_name': 'Claudio',
                'email': 'claudio@example.com',
            }
        )
        auth_repository.create_user(
            {
                'owner_name': 'Claudio',
                'email': 'claudio@example.com',
                'password_hash': generate_password_hash('Senha@123'),
                'establishment_id': establishment.id,
            }
        )

        service = AuthService(
            repository=auth_repository,
            establishment_repository=establishment_repository,
        )
        result = service.login({'email': 'claudio@example.com', 'password': 'Senha@123'})

        assert result['user']['email'] == 'claudio@example.com'
        assert result['access_token']
        assert result['refresh_token']


def test_logout_revokes_access_and_refresh_tokens(app) -> None:
    with app.app_context():
        auth_repository = AuthRepository()
        establishment_repository = EstablishmentRepository()
        revoked_repository = RevokedTokenRepository()
        service = AuthService(
            repository=auth_repository,
            establishment_repository=establishment_repository,
            revoked_token_repository=revoked_repository,
        )

        payload = service.register_owner(
            {
                'owner_name': 'Lia',
                'email': 'lia@example.com',
                'password': 'Senha@123',
                'establishment_name': 'Cafe da Lia',
                'cnpj': '19.345.678/0001-90',
                'phone': '(62) 99999-2222',
            }
        )

        service.logout(payload['access_token'], payload['refresh_token'])

        assert revoked_repository.exists(jti=__import__('jwt').decode(payload['access_token'], app.config['JWT_SECRET_KEY'], algorithms=['HS256'])['jti'])
        assert revoked_repository.exists(jti=__import__('jwt').decode(payload['refresh_token'], app.config['JWT_SECRET_KEY'], algorithms=['HS256'])['jti'])
