from db.database import db
from datetime import datetime
import uuid
from sqlalchemy_utils import UUIDType

class Response(db.Model):
    __tablename__ = 'responses'
    id = db.Column(UUIDType(binary=False), primary_key=True, default=uuid.uuid4)
    thread_id =db.Column(db.String(255),db.ForeignKey("threads.id"))
    create_date = db.Column(db.DateTime, nullable=False, default=datetime.now)
    update_date = db.Column(db.DateTime, nullable=False, default=datetime.now, onupdate=datetime.now)
    content = db.Column(db.Text)
    user_id = db.Column(db.String(255),db.ForeignKey("users.id"))

    
    

