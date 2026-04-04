from __future__ import annotations


def validate_register_payload(payload: dict[str, object]) -> list[str]:
    required_fields = [
        'owner_name',
        'email',
        'password',
        'establishment_name',
        'cnpj',
    ]
    missing: list[str] = []
    for field in required_fields:
        value = str(payload.get(field, '')).strip()
        if not value:
            missing.append(field)
    return missing


def validate_login_payload(payload: dict[str, object]) -> list[str]:
    required_fields = ['email', 'password']
    missing: list[str] = []
    for field in required_fields:
        value = str(payload.get(field, '')).strip()
        if not value:
            missing.append(field)
    return missing
