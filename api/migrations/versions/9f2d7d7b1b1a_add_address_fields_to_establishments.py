"""add address fields to establishments

Revision ID: 9f2d7d7b1b1a
Revises: 81ecb53cb90e
Create Date: 2026-04-05 00:00:00.000000

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9f2d7d7b1b1a'
down_revision = '81ecb53cb90e'
branch_labels = None
depends_on = None


def upgrade():
    with op.batch_alter_table('establishments', schema=None) as batch_op:
        batch_op.add_column(sa.Column('address', sa.String(length=255), nullable=False, server_default=''))
        batch_op.add_column(sa.Column('neighborhood', sa.String(length=120), nullable=False, server_default=''))
        batch_op.add_column(sa.Column('city', sa.String(length=120), nullable=False, server_default=''))


def downgrade():
    with op.batch_alter_table('establishments', schema=None) as batch_op:
        batch_op.drop_column('city')
        batch_op.drop_column('neighborhood')
        batch_op.drop_column('address')
