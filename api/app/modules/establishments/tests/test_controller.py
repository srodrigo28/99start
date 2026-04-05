def _register_and_login(client) -> dict[str, str]:
    response = client.post(
        '/api/v1/auth/register',
        json={
            'owner_name': 'Carlos',
            'email': 'carlos@example.com',
            'password': 'Senha@123',
            'establishment_name': 'Novo Local',
            'cnpj': '11.222.333/0001-44',
            'phone': '(62) 97777-1111',
            'address': 'Rua E, 5',
            'neighborhood': 'Centro',
            'city': 'Goiania',
        },
    )
    return response.get_json()['data']


def test_list_establishments_requires_auth(client) -> None:
    response = client.get('/api/v1/establishments/')
    assert response.status_code == 401


def test_list_establishments_returns_data_with_token(client) -> None:
    auth_data = _register_and_login(client)
    response = client.get(
        '/api/v1/establishments/',
        headers={'Authorization': f"Bearer {auth_data['access_token']}"},
    )
    body = response.get_json()

    assert response.status_code == 200
    assert body['success'] is True
    assert len(body['data']) >= 1


def test_create_establishment_requires_required_fields(client) -> None:
    response = client.post('/api/v1/establishments/', json={'name': 'Novo Local'})
    body = response.get_json()

    assert response.status_code == 422
    assert body['success'] is False
    assert 'cnpj' in body['errors']
    assert 'address' in body['errors']
