from __future__ import annotations

from flask import jsonify


def json_success(*, data: object, message: str = 'OK', status_code: int = 200):
    return jsonify({'success': True, 'message': message, 'data': data}), status_code


def json_error(*, message: str, errors: list[str] | None = None, status_code: int = 400):
    payload = {'success': False, 'message': message, 'errors': errors or []}
    return jsonify(payload), status_code
