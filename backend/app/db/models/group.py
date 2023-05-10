from db.database import db
from sqlalchemy.orm import relationship
from sqlalchemy_utils import UUIDType


class UserGroup(db.Model):
    __tablename__ = "usergroup"
    user_id = db.Column(UUIDType(binary=False),db.ForeignKey("users.id"), primary_key=True)
    name = db.Column(db.String(255),primary_key=True)
    
class ThreadGroup(db.Model):
    __tablename__ = "threadgroup"
    thread_id = db.Column(UUIDType(binary=False),db.ForeignKey("threads.id"), primary_key=True)
    name = db.Column(db.String(255),primary_key=True)