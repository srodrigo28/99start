from __future__ import annotations

from datetime import datetime, timedelta, timezone
from functools import wraps
from uuid import uuid4

import jwt
from flask import current_app, g, request

from app.core.responses import json_error
from app.modules.auth.repository import AuthRepository, RevokedTokenRepository


class AuthError(Exception):
    pass


def _utc_now() -> datetime:
    return datetime.now(timezone.utc)


def create_access_token(*, user_id: int, role: str) -> str:
    issued_at = _utc_now()
    expires_at = issued_at + timedelta(minutes=current_app.config['JWT_ACCESS_TOKEN_EXPIRES_MINUTES'])
    payload = {
        'sub': str(user_id),
        'role': role,
        'type': 'access',
        'jti': str(uuid4()),
        'iat': int(issued_at.timestamp()),
        'exp': int(expires_at.timestamp()),
    }
    return jwt.encode(payload, current_app.config['JWT_SECRET_KEY'], algorithm='HS256')


def create_refresh_token(*, user_id: int, role: str) -> str:
    issued_at = _utc_now()
    expires_at = issued_at + timedelta(days=current_app.config['JWT_REFRESH_TOKEN_EXPIRES_DAYS'])
    payload = {
        'sub': str(user_id),
        'role': role,
        'type': 'refresh',
        'jti': str(uuid4()),
        'iat': int(issued_at.timestamp()),
        'exp': int(expires_at.timestamp()),
    }
    return jwt.encode(payload, current_app.config['JWT_SECRET_KEY'], algorithm='HS256')


def decode_token(token: str, *, expected_type: str | None = None) -> dict[str, object]:
    try:
        payload = jwt.decode(token, current_app.config['JWT_SECRET_KEY'], algorithms=['HS256'])
    except jwt.PyJWTError as exc:
        raise AuthError('Token invalido ou expirado.') from exc

    if expected_type and payload.get('type') != expected_type:
        raise AuthError('Tipo de token invalido.')

    return payload


def extract_bearer_token() -> str:
    auth_header = request.headers.get('Authorization', '').strip()
    if not auth_header.startswith('Bearer '):
        raise AuthError('Token Bearer obrigatorio.')
    return auth_header.split(' ', 1)[1].strip()


def auth_required(view_func):
    @wraps(view_func)
    def wrapper(*args, **kwargs):
        try:
            token = extract_bearer_token()
            payload = decode_token(token, expected_type='access')
            revoked_repository = RevokedTokenRepository()
            if revoked_repository.exists(str(payload['jti'])):
                raise AuthError('Token revogado.')
            user = AuthRepository().find_by_id(int(payload['sub']))
            if not user:
                raise AuthError('Usuario autenticado nao encontrado.')
            g.current_user = user
            g.current_token = payload
        except AuthError as exc:
            return json_error(message=str(exc), status_code=401)

        return view_func(*args, **kwargs)

    return wrapper
