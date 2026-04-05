from __future__ import annotations

from app.core.extensions import db
from app.modules.establishments.model import Establishment


class EstablishmentRepository:
    def list_all(self) -> list[Establishment]:
        return Establishment.query.order_by(Establishment.id.asc()).all()

    def create(self, payload: dict[str, object]) -> Establishment:
        establishment = Establishment(
            name=str(payload['name']).strip(),
            cnpj=str(payload['cnpj']).strip(),
            phone=str(payload.get('phone', '')).strip(),
            owner_name=str(payload['owner_name']).strip(),
            email=str(payload['email']).strip().lower(),
            address=str(payload['address']).strip(),
            neighborhood=str(payload['neighborhood']).strip(),
            city=str(payload['city']).strip(),
            status='pending',
        )
        db.session.add(establishment)
        db.session.commit()
        return establishment

    def find_by_cnpj(self, cnpj: str) -> Establishment | None:
        return Establishment.query.filter_by(cnpj=cnpj.strip()).first()

    def find_by_name(self, name: str) -> Establishment | None:
        normalized_name = name.strip()
        return Establishment.query.filter(Establishment.name.ilike(normalized_name)).first()
