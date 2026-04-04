from __future__ import annotations

from flask import Blueprint

from app.modules.auth.controller import AuthController


auth_blueprint = Blueprint('auth', __name__)
controller = AuthController()


auth_blueprint.post('/register')(controller.register)
auth_blueprint.post('/login')(controller.login)
auth_blueprint.post('/refresh')(controller.refresh)
auth_blueprint.post('/logout')(controller.logout)
auth_blueprint.get('/me')(controller.me)
