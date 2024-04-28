import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

DB_URI = os.getenv("MONGO_DB_URI")


def init_db(uri: str):
    """
    Initialize database
    :param uri: str
    :return: database
    """
    client = MongoClient(uri)
    return client.get_database('prod')


db = init_db(DB_URI)
