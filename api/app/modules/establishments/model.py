from __future__ import annotations

from datetime import datetime, timezone

from app.core.extensions import db


class Establishment(db.Model):
    __tablename__ = 'establishments'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(160), nullable=False)
    cnpj = db.Column(db.String(18), nullable=False, unique=True, index=True)
    phone = db.Column(db.String(30), nullable=False, default='')
    owner_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(160), nullable=False)
    address = db.Column(db.String(255), nullable=False, default='')
    neighborhood = db.Column(db.String(120), nullable=False, default='')
    city = db.Column(db.String(120), nullable=False, default='')
    status = db.Column(db.String(40), nullable=False, default='pending')
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc))

    owners = db.relationship('User', back_populates='establishment', cascade='all, delete-orphan')

    def to_dict(self) -> dict[str, object]:
        return {
            'id': self.id,
            'name': self.name,
            'cnpj': self.cnpj,
            'phone': self.phone,
            'owner_name': self.owner_name,
            'email': self.email,
            'address': self.address,
            'neighborhood': self.neighborhood,
            'city': self.city,
            'status': self.status,
        }
