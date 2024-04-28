"""User service"""

from typing import Optional
from pydantic import BaseModel, Field
# from config.settings import db as database
from resources.objectid import PydanticObjectId


class User(BaseModel):
    """
    User model
    """
    id: Optional[PydanticObjectId] = Field(None, alias="_id")
    name: str
    last_name: str
    email: str

    def to_json(self):
        """
        Convert model to json
        """
        return self.model_dump_json(exclude_unset=True)

    def to_bson(self):
        """
        Convert model to bson
        """
        return self.model_dump(exclude_unset=True)


class UserService():
    """
    User service
    """
    def __init__(self, db):
        self.db = db
        self.collection = db.users

    def get_user(self, user_id):
        """
        Get user by id
        :param user_id: str
        """
        return self.collection.find_one({"_id": user_id})

    def create_user(self, user: User):
        """
        Create user
        :param user: User
        """
        return self.collection.insert_one(user.to_bson())
