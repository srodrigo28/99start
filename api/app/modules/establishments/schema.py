from __future__ import annotations


def validate_establishment_payload(payload: dict[str, object]) -> list[str]:
    required_fields = ['name', 'cnpj', 'phone', 'owner_name', 'email']
    missing: list[str] = []
    for field in required_fields:
        value = str(payload.get(field, '')).strip()
        if not value:
            missing.append(field)
    return missing
