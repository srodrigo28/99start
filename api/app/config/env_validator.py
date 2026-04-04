from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Iterable


ENV_PATH = Path(__file__).resolve().parents[2] / ".env"

REQUIRED_ENV_GROUPS = {
    "app": [
        "FLASK_ENV",
        "APP_NAME",
        "APP_HOST",
        "APP_PORT",
    ],
    "security": [
        "SECRET_KEY",
        "JWT_SECRET_KEY",
    ],
    "database": [
        "DB_DRIVER",
        "DB_HOST",
        "DB_PORT",
        "DB_USER",
        "DB_PASSWORD",
        "DB_NAME",
    ],
}

OPTIONAL_ENV_GROUPS = {
    "database_test": [
        "TEST_DB_DRIVER",
        "TEST_DB_HOST",
        "TEST_DB_PORT",
        "TEST_DB_USER",
        "TEST_DB_PASSWORD",
        "TEST_DB_NAME",
    ],
    "pix": [
        "PIX_DEFAULT_KEY",
        "PIX_RECEIVER_NAME",
        "PIX_RECEIVER_CITY",
    ],
    "admin": [
        "ADMIN_NAME",
        "ADMIN_EMAIL",
        "ADMIN_PASSWORD",
    ],
}


@dataclass
class EnvValidationResult:
    missing_required: dict[str, list[str]]
    missing_optional: dict[str, list[str]]

    @property
    def is_valid(self) -> bool:
        return not any(self.missing_required.values())


def load_env_file(path: Path = ENV_PATH) -> dict[str, str]:
    env_map: dict[str, str] = {}
    if not path.exists():
        raise FileNotFoundError(f"Arquivo .env não encontrado em: {path}")

    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        env_map[key.strip()] = value.strip()
    return env_map


def find_missing_keys(env_map: dict[str, str], keys: Iterable[str]) -> list[str]:
    missing: list[str] = []
    for key in keys:
        if not env_map.get(key, "").strip():
            missing.append(key)
    return missing


def validate_env_map(env_map: dict[str, str]) -> EnvValidationResult:
    missing_required = {
        group: find_missing_keys(env_map, keys)
        for group, keys in REQUIRED_ENV_GROUPS.items()
    }
    missing_optional = {
        group: find_missing_keys(env_map, keys)
        for group, keys in OPTIONAL_ENV_GROUPS.items()
    }
    return EnvValidationResult(
        missing_required=missing_required,
        missing_optional=missing_optional,
    )


def validate_env_file(path: Path = ENV_PATH) -> EnvValidationResult:
    return validate_env_map(load_env_file(path))
