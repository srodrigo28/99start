from app.modules.establishments.repository import EstablishmentRepository


def test_list_all_returns_existing_establishments(app) -> None:
    with app.app_context():
        repository = EstablishmentRepository()
        repository.create(
            {
                'name': 'Casa do Chopp',
                'cnpj': '77.888.999/0001-00',
                'phone': '(62) 96666-0000',
                'owner_name': 'Fernanda',
                'email': 'fernanda@example.com',
                'address': 'Rua G, 7',
                'neighborhood': 'Centro',
                'city': 'Goiania',
            }
        )

        items = repository.list_all()

        assert len(items) >= 1
        assert items[0].name
        assert items[0].city == 'Goiania'
