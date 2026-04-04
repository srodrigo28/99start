from __future__ import annotations

from flask import g, request

from app.core.responses import json_error, json_success
from app.core.security import auth_required, extract_bearer_token
from app.modules.auth.schema import validate_login_payload, validate_register_payload
from app.modules.auth.service import AuthService


class AuthController:
    def __init__(self, service: AuthService | None = None) -> None:
        self.service = service or AuthService()

    def register(self):
        payload = request.get_json(silent=True) or {}
        missing_fields = validate_register_payload(payload)
        if missing_fields:
            return json_error(
                message='Dados obrigatorios ausentes para cadastro do estabelecimento.',
                errors=missing_fields,
                status_code=422,
            )

        try:
            result = self.service.register_owner(payload)
        except ValueError as exc:
            return json_error(message=str(exc), status_code=409)

        return json_success(
            data=result,
            message='Cadastro do estabelecimento realizado com sucesso.',
            status_code=201,
        )

    def login(self):
        payload = request.get_json(silent=True) or {}
        missing_fields = validate_login_payload(payload)
        if missing_fields:
            return json_error(
                message='Informe e-mail e senha para entrar.',
                errors=missing_fields,
                status_code=422,
            )

        try:
            result = self.service.login(payload)
        except ValueError as exc:
            return json_error(message=str(exc), status_code=404)

        return json_success(data=result, message='Login realizado com sucesso.')

    def refresh(self):
        payload = request.get_json(silent=True) or {}
        refresh_token = str(payload.get('refresh_token', '')).strip()
        if not refresh_token:
            return json_error(message='Refresh token obrigatorio.', status_code=422)
        try:
            result = self.service.refresh(refresh_token)
        except ValueError as exc:
            return json_error(message=str(exc), status_code=401)
        return json_success(data=result, message='Token renovado com sucesso.')

    @auth_required
    def logout(self):
        payload = request.get_json(silent=True) or {}
        refresh_token = str(payload.get('refresh_token', '')).strip() or None
        try:
            result = self.service.logout(extract_bearer_token(), refresh_token)
        except ValueError as exc:
            return json_error(message=str(exc), status_code=401)
        return json_success(data=result, message='Logout realizado com sucesso.')

    @auth_required
    def me(self):
        result = self.service.me(g.current_user.id)
        return json_success(data=result, message='Perfil carregado com sucesso.')
