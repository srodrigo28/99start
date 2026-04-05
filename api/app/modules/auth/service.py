from __future__ import annotations

from werkzeug.security import check_password_hash, generate_password_hash

from app.core.security import create_access_token, create_refresh_token, decode_token
from app.modules.auth.repository import AuthRepository, RevokedTokenRepository
from app.modules.establishments.repository import EstablishmentRepository


class AuthService:
    def __init__(
        self,
        repository: AuthRepository | None = None,
        establishment_repository: EstablishmentRepository | None = None,
        revoked_token_repository: RevokedTokenRepository | None = None,
    ) -> None:
        self.repository = repository or AuthRepository()
        self.establishment_repository = establishment_repository or EstablishmentRepository()
        self.revoked_token_repository = revoked_token_repository or RevokedTokenRepository()

    def _build_auth_payload(self, user) -> dict[str, object]:
        return {
            'user': user.to_dict(),
            'establishment': user.establishment.to_dict(),
            'access_token': create_access_token(user_id=user.id, role=user.role),
            'refresh_token': create_refresh_token(user_id=user.id, role=user.role),
        }

    def register_owner(self, payload: dict[str, object]) -> dict[str, object]:
        email = str(payload['email']).strip().lower()
        cnpj = str(payload['cnpj']).strip()
        if self.repository.find_by_email(email):
            raise ValueError('Ja existe um usuario com este e-mail.')
        if self.establishment_repository.find_by_cnpj(cnpj):
            raise ValueError('Ja existe um estabelecimento com este CNPJ.')

        establishment = self.establishment_repository.create(
            {
                'name': payload['establishment_name'],
                'cnpj': cnpj,
                'phone': payload.get('phone', ''),
                'owner_name': payload['owner_name'],
                'email': email,
                'address': payload['address'],
                'neighborhood': payload['neighborhood'],
                'city': payload['city'],
            }
        )
        user = self.repository.create_user(
            {
                'owner_name': payload['owner_name'],
                'email': email,
                'password_hash': generate_password_hash(str(payload['password'])),
                'role': 'owner',
                'establishment_id': establishment.id,
            }
        )
        return self._build_auth_payload(user)

    def login(self, payload: dict[str, object]) -> dict[str, object]:
        email = str(payload['email']).strip().lower()
        password = str(payload['password'])
        user = self.repository.find_by_email(email)
        if not user:
            raise ValueError('Usuario nao encontrado para este e-mail.')
        if not check_password_hash(user.password_hash, password):
            raise ValueError('Senha invalida.')

        return self._build_auth_payload(user)

    def refresh(self, refresh_token: str) -> dict[str, object]:
        payload = decode_token(refresh_token, expected_type='refresh')
        if self.revoked_token_repository.exists(str(payload['jti'])):
            raise ValueError('Refresh token revogado.')
        user = self.repository.find_by_id(int(payload['sub']))
        if not user:
            raise ValueError('Usuario autenticado nao encontrado.')
        return self._build_auth_payload(user)

    def logout(self, access_token: str, refresh_token: str | None = None) -> dict[str, object]:
        access_payload = decode_token(access_token, expected_type='access')
        self.revoked_token_repository.revoke(jti=str(access_payload['jti']), token_type='access')

        if refresh_token:
            refresh_payload = decode_token(refresh_token, expected_type='refresh')
            if not self.revoked_token_repository.exists(str(refresh_payload['jti'])):
                self.revoked_token_repository.revoke(jti=str(refresh_payload['jti']), token_type='refresh')

        return {'logged_out': True}

    def me(self, user_id: int) -> dict[str, object]:
        user = self.repository.find_by_id(user_id)
        if not user:
            raise ValueError('Usuario autenticado nao encontrado.')
        return {
            'user': user.to_dict(),
            'establishment': user.establishment.to_dict(),
        }
