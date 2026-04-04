from __future__ import annotations

from flask import Blueprint

from app.core.security import auth_required
from app.modules.establishments.controller import EstablishmentController


establishments_blueprint = Blueprint('establishments', __name__)
controller = EstablishmentController()


establishments_blueprint.get('/')(auth_required(controller.list_all))
establishments_blueprint.post('/')(controller.create)
