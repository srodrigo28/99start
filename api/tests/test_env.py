from pathlib import Path

from app.config.env_validator import validate_env_file, validate_env_map


BASE_DIR = Path(__file__).resolve().parents[1]
ENV_PATH = BASE_DIR / ".env"


def test_validate_env_map_accepts_complete_minimum_payload() -> None:
    env_map = {
        "FLASK_ENV": "development",
        "APP_NAME": "99start-api",
        "APP_HOST": "127.0.0.1",
        "APP_PORT": "5000",
        "SECRET_KEY": "secret",
        "JWT_SECRET_KEY": "jwt-secret",
        "DB_DRIVER": "postgresql",
        "DB_HOST": "db.example.com",
        "DB_PORT": "5432",
        "DB_USER": "postgres",
        "DB_PASSWORD": "strong-password",
        "DB_NAME": "99start",
    }

    result = validate_env_map(env_map)

    assert result.is_valid is True
    assert all(not missing for missing in result.missing_required.values())


def test_current_env_file_has_required_values() -> None:
    result = validate_env_file(ENV_PATH)

    missing = {group: values for group, values in result.missing_required.items() if values}

    assert not missing, (
        "Preencha as variáveis obrigatórias no arquivo api/.env antes de seguir com a API. "
        f"Pendências: {missing}"
    )
