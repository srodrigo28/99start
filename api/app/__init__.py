from __future__ import annotations

from flask import Flask

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
