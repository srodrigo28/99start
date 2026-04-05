from __future__ import annotations

from flask import Flask, request

from app.config.settings import get_settings
from app.core.extensions import db, migrate
from app.core.responses import json_success
from app.modules.auth.routes import auth_blueprint
from app.modules.establishments.routes import establishments_blueprint


def create_app(config_overrides: dict[str, object] | None = None) -> Flask:
    app = Flask(__name__)
    settings = get_settings()
    app.config.from_mapping(settings.to_flask_config())

    if config_overrides:
        app.config.update(config_overrides)

    db.init_app(app)
    migrate.init_app(app, db)

    def _get_allowed_origin() -> str | None:
        request_origin = request.headers.get('Origin')
        raw_origins = str(app.config.get('CORS_ORIGINS', '')).strip()

        if not raw_origins:
            return None

        allowed_origins = [origin.strip() for origin in raw_origins.split(',') if origin.strip()]
        if not allowed_origins:
            return None

        if '*' in allowed_origins:
            return request_origin or '*'

        if request_origin and request_origin in allowed_origins:
            return request_origin

        return None

    @app.after_request
    def apply_cors_headers(response):
        allowed_origin = _get_allowed_origin()
        if not allowed_origin:
            return response

        response.headers['Access-Control-Allow-Origin'] = allowed_origin
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
        response.headers['Access-Control-Allow-Credentials'] = 'true'
        response.headers['Vary'] = 'Origin'
        return response

    @app.before_request
    def handle_cors_preflight():
        if request.method != 'OPTIONS':
            return None

        response = app.make_default_options_response()
        return apply_cors_headers(response)

    app.register_blueprint(auth_blueprint, url_prefix='/api/v1/auth')
    app.register_blueprint(establishments_blueprint, url_prefix='/api/v1/establishments')

    @app.get('/api/v1/health')
    def healthcheck():
        return json_success(
            data={
                'status': 'ok',
                'app': settings.app_name,
                'environment': app.config.get('ENV', settings.flask_env),
                'database_url': app.config.get('SQLALCHEMY_DATABASE_URI'),
            }
        )

    return app
