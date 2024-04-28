"""User controller"""

from flask import Blueprint, jsonify, request
from resources.user.user_service import UserService, User

users_bp = Blueprint('users', __name__)


@users_bp.route('/users/<string:user_id>', methods=['GET'])
def get_user(user_id: str):
    """
    Get user by id
    :param user_id: str
    :return: json
    """
    user = UserService.get_user(user_id=user_id)
    return jsonify(user)


@users_bp.route('/users', methods=['POST'])
def create_user():
    """
    Create user
    :return: json
    """
    new_user = User(request.json)
    user = UserService.create_user(new_user)
    return jsonify(user)
