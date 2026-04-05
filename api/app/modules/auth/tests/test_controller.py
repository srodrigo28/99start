def test_register_returns_created_for_valid_payload(client) -> None:
    response = client.post(
        '/api/v1/auth/register',
        json={
            'owner_name': 'Maria Souza',
            'email': 'maria@example.com',
            'password': 'Senha@123',
            'establishment_name': 'Bar da Maria',
            'cnpj': '12.345.678/0001-90',
            'phone': '(62) 99999-1234',
            'address': 'Rua das Flores, 10',
            'neighborhood': 'Centro',
            'city': 'Goiania',
        },
    )

    body = response.get_json()

    assert response.status_code == 201
    assert body['success'] is True
    assert body['data']['user']['email'] == 'maria@example.com'
    assert body['data']['establishment']['city'] == 'Goiania'
    assert body['data']['access_token']
    assert body['data']['refresh_token']


def test_login_returns_not_found_for_unknown_user(client) -> None:
    response = client.post(
        '/api/v1/auth/login',
        json={'email': 'naoexiste@example.com', 'password': '123456'},
    )

    body = response.get_json()

    assert response.status_code == 404
    assert body['success'] is False


def test_me_requires_valid_token(client) -> None:
    response = client.get('/api/v1/auth/me')
    assert response.status_code == 401
