from __future__ import annotations

from dataclasses import dataclass
from functools import lru_cache
from urllib.parse import quote_plus

from app.config.env_validator import load_env_file


@dataclass(frozen=True)
class Settings:
    app_name: str
    flask_env: str
    app_host: str
    app_port: int
    cors_origins: str
    secret_key: str
    jwt_secret_key: str
    jwt_access_token_expires_minutes: int
    jwt_refresh_token_expires_days: int
    db_driver: str
    db_host: str
    db_port: int
    db_user: str
    db_password: str
    db_name: str
    db_ssl_mode: str

    @property
    def sqlalchemy_driver(self) -> str:
        if self.db_driver == 'postgresql':
            return 'postgresql+psycopg'
        return self.db_driver

    @property
    def database_uri(self) -> str:
        encoded_password = quote_plus(self.db_password)
        return (
            f'{self.sqlalchemy_driver}://{self.db_user}:{encoded_password}'
            f'@{self.db_host}:{self.db_port}/{self.db_name}'
        )

    def to_flask_config(self) -> dict[str, object]:
        engine_options: dict[str, object] = {}
        if self.db_ssl_mode:
            engine_options['connect_args'] = {'sslmode': self.db_ssl_mode}

        return {
            'APP_NAME': self.app_name,
            'ENV': self.flask_env,
            'CORS_ORIGINS': self.cors_origins,
            'SECRET_KEY': self.secret_key,
            'JWT_SECRET_KEY': self.jwt_secret_key,
            'JWT_ACCESS_TOKEN_EXPIRES_MINUTES': self.jwt_access_token_expires_minutes,
            'JWT_REFRESH_TOKEN_EXPIRES_DAYS': self.jwt_refresh_token_expires_days,
            'SQLALCHEMY_DATABASE_URI': self.database_uri,
            'SQLALCHEMY_TRACK_MODIFICATIONS': False,
            'SQLALCHEMY_ENGINE_OPTIONS': engine_options,
            'DB_SSL_MODE': self.db_ssl_mode,
        }


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    env_map = load_env_file()
    return Settings(
        app_name=env_map['APP_NAME'],
        flask_env=env_map['FLASK_ENV'],
        app_host=env_map['APP_HOST'],
        app_port=int(env_map['APP_PORT']),
        cors_origins=env_map.get('CORS_ORIGINS', '*'),
        secret_key=env_map['SECRET_KEY'],
        jwt_secret_key=env_map['JWT_SECRET_KEY'],
        jwt_access_token_expires_minutes=int(env_map.get('JWT_ACCESS_TOKEN_EXPIRES_MINUTES', '60')),
        jwt_refresh_token_expires_days=int(env_map.get('JWT_REFRESH_TOKEN_EXPIRES_DAYS', '30')),
        db_driver=env_map['DB_DRIVER'],
        db_host=env_map['DB_HOST'],
        db_port=int(env_map['DB_PORT']),
        db_user=env_map['DB_USER'],
        db_password=env_map['DB_PASSWORD'],
        db_name=env_map['DB_NAME'],
        db_ssl_mode=env_map.get('DB_SSL_MODE', 'prefer'),
    )
