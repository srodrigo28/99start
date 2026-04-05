import pytest

from app import create_app
from app.core.extensions import db
from app.modules.auth.model import User
from app.modules.establishments.model import Establishment


@pytest.fixture()
def app():
    app = create_app(
        {
            'TESTING': True,
            'SQLALCHEMY_DATABASE_URI': 'sqlite:///:memory:',
            'SQLALCHEMY_ENGINE_OPTIONS': {},
        }
    )

    with app.app_context():
        db.create_all()
        yield app
        db.session.remove()
        db.drop_all()


@pytest.fixture()
def client(app):
    return app.test_client()


@pytest.fixture()
def persisted_establishment(app):
    with app.app_context():
        establishment = Establishment(
            name='Saraiiva Bar',
            cnpj='00.000.000/0001-91',
            phone='(62) 99999-0000',
            owner_name='Heitor',
            email='contato@saraiiva.com',
            address='Rua Principal, 100',
            neighborhood='Centro',
            city='Goiania',
            status='pending',
        )
        db.session.add(establishment)
        db.session.commit()
        return establishment


@pytest.fixture()
def persisted_user(app, persisted_establishment):
    with app.app_context():
        user = User(
            owner_name='Heitor',
            email='heitor@example.com',
            password_hash='pbkdf2:sha256:1000000$abc$xyz',
            role='owner',
            establishment_id=persisted_establishment.id,
        )
        db.session.add(user)
        db.session.commit()
        return user
