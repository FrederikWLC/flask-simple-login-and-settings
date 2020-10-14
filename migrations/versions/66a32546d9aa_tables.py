"""Tables

Revision ID: 66a32546d9aa
Revises: d6e29c32149a
Create Date: 2020-10-14 23:10:34.843430

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '66a32546d9aa'
down_revision = 'd6e29c32149a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('phone_prefix', sa.String(length=4), nullable=True))
    op.create_index(op.f('ix_user_phone_prefix'), 'user', ['phone_prefix'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_user_phone_prefix'), table_name='user')
    op.drop_column('user', 'phone_prefix')
    # ### end Alembic commands ###
