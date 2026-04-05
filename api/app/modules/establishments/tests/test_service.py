from app.modules.establishments.repository import EstablishmentRepository
from app.modules.establishments.service import EstablishmentService


def test_create_establishment_returns_pending_status(app) -> None:
    with app.app_context():
        repository = EstablishmentRepository()
        service = EstablishmentService(repository=repository)

        establishment = service.create_establishment(
            {
                'name': 'Boteco Central',
                'cnpj': '12.345.678/0001-90',
                'phone': '(62) 98888-0000',
                'owner_name': 'Claudio',
                'email': 'claudio@example.com',
                'address': 'Rua F, 6',
                'neighborhood': 'Centro',
                'city': 'Goiania',
            }
        )

        assert establishment['status'] == 'pending'
        assert establishment['city'] == 'Goiania'


def test_create_establishment_rejects_duplicate_cnpj(app) -> None:
    with app.app_context():
        repository = EstablishmentRepository()
        service = EstablishmentService(repository=repository)
        payload = {
            'name': 'Boteco Central',
            'cnpj': '12.345.678/0001-90',
            'phone': '(62) 98888-0000',
            'owner_name': 'Claudio',
            'email': 'claudio@example.com',
            'address': 'Rua F, 6',
            'neighborhood': 'Centro',
            'city': 'Goiania',
        }

        service.create_establishment(payload)

        try:
            service.create_establishment(payload)
            assert False, 'Era esperado erro para CNPJ duplicado.'
        except ValueError as exc:
            assert 'CNPJ' in str(exc)
