from __future__ import annotations

from app.modules.establishments.repository import EstablishmentRepository


class EstablishmentService:
    def __init__(self, repository: EstablishmentRepository | None = None) -> None:
        self.repository = repository or EstablishmentRepository()

    def list_establishments(self) -> list[dict[str, object]]:
        return [item.to_dict() for item in self.repository.list_all()]

    def create_establishment(self, payload: dict[str, object]) -> dict[str, object]:
        if self.repository.find_by_name(str(payload['name'])):
            raise ValueError('Ja existe um estabelecimento com este nome.')
        if self.repository.find_by_cnpj(str(payload['cnpj'])):
            raise ValueError('Ja existe um estabelecimento com este CNPJ.')
        establishment = self.repository.create(payload)
        return establishment.to_dict()
