def test_healthcheck_returns_ok(client) -> None:
    response = client.get('/api/v1/health')
    body = response.get_json()

    assert response.status_code == 200
    assert body['success'] is True
    assert body['data']['status'] == 'ok'


def test_healthcheck_returns_cors_headers_for_allowed_origin(client) -> None:
    response = client.get(
        '/api/v1/health',
        headers={'Origin': 'http://localhost:8081'},
    )

    assert response.status_code == 200
    assert response.headers['Access-Control-Allow-Origin'] == 'http://localhost:8081'
    assert 'Authorization' in response.headers['Access-Control-Allow-Headers']
