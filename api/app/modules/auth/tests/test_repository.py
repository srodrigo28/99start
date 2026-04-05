from app.modules.auth.repository import AuthRepository
from app.modules.establishments.repository import EstablishmentRepository


def test_find_by_email_returns_saved_user(app) -> None:
    with app.app_context():
        establishment_repository = EstablishmentRepository()
        establishment = establishment_repository.create(
            {
                'name': 'Lanchonete da Paula',
                'cnpj': '55.444.333/0001-22',
                'phone': '(62) 97777-0000',
                'owner_name': 'Paula',
                'email': 'paula@example.com',
                'address': 'Rua D, 4',
                'neighborhood': 'Centro',
                'city': 'Goiania',
            }
        )
        repository = AuthRepository()
        repository.create_user(
            {
                'owner_name': 'Paula',
                'email': 'paula@example.com',
                'password_hash': 'hash',
                'establishment_id': establishment.id,
            }
        )

        found = repository.find_by_email('paula@example.com')

        assert found is not None
        assert found.owner_name == 'Paula'
