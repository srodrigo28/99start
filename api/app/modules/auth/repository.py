from __future__ import annotations

from app.core.extensions import db
from app.modules.auth.model import RevokedToken, User


class AuthRepository:
    def create_user(self, payload: dict[str, object]) -> User:
        user = User(
            owner_name=str(payload['owner_name']).strip(),
            email=str(payload['email']).strip().lower(),
            password_hash=str(payload['password_hash']),
            role=str(payload.get('role', 'owner')),
            establishment_id=int(payload['establishment_id']),
        )
        db.session.add(user)
        db.session.commit()
        return user

    def find_by_email(self, email: str) -> User | None:
        normalized_email = email.strip().lower()
        return User.query.filter_by(email=normalized_email).first()

    def find_by_id(self, user_id: int) -> User | None:
        return db.session.get(User, user_id)


class RevokedTokenRepository:
    def revoke(self, *, jti: str, token_type: str) -> RevokedToken:
        revoked = RevokedToken(jti=jti, token_type=token_type)
        db.session.add(revoked)
        db.session.commit()
        return revoked

    def exists(self, jti: str) -> bool:
        return RevokedToken.query.filter_by(jti=jti).first() is not None
