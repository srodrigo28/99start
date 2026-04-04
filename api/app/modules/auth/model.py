from __future__ import annotations

from datetime import datetime, timezone

from app.core.extensions import db


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    owner_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(160), unique=True, nullable=False, index=True)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(50), nullable=False, default='owner')
    establishment_id = db.Column(db.Integer, db.ForeignKey('establishments.id'), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc))

    establishment = db.relationship('Establishment', back_populates='owners')

    def to_dict(self) -> dict[str, object]:
        return {
            'id': self.id,
            'owner_name': self.owner_name,
            'email': self.email,
            'role': self.role,
            'establishment_id': self.establishment_id,
        }


class RevokedToken(db.Model):
    __tablename__ = 'revoked_tokens'

    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(64), unique=True, nullable=False, index=True)
    token_type = db.Column(db.String(20), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), nullable=False, default=lambda: datetime.now(timezone.utc))
