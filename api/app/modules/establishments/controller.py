from __future__ import annotations

from flask import request

from app.core.responses import json_error, json_success
from app.modules.establishments.schema import validate_establishment_payload
from app.modules.establishments.service import EstablishmentService


class EstablishmentController:
    def __init__(self, service: EstablishmentService | None = None) -> None:
        self.service = service or EstablishmentService()

    def list_all(self):
        return json_success(
            data=self.service.list_establishments(),
            message='Lista de estabelecimentos carregada com sucesso.',
        )

    def create(self):
        payload = request.get_json(silent=True) or {}
        missing_fields = validate_establishment_payload(payload)
        if missing_fields:
            return json_error(
                message='Dados obrigatorios ausentes para o estabelecimento.',
                errors=missing_fields,
                status_code=422,
            )

        try:
            establishment = self.service.create_establishment(payload)
        except ValueError as exc:
            return json_error(message=str(exc), status_code=409)

        return json_success(
            data=establishment,
            message='Estabelecimento cadastrado com sucesso.',
            status_code=201,
        )
