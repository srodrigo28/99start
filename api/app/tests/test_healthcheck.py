def test_healthcheck_returns_ok(client) -> None:
    response = client.get('/api/v1/health')
    body = response.get_json()

    assert response.status_code == 200
    assert body['success'] is True
    assert body['data']['status'] == 'ok'
