"""Exercise controller module."""

from flask import Blueprint, jsonify
from resources.exercise.exercise_service import exercise_service as ExerciseService

exercise_bp = Blueprint('exercises', __name__)


@exercise_bp.route('/exercises/<string:exercise_id>', methods=['GET'])
def get_exercise(exercise_id: str):
    """
    Get exercise by id
    :param exercise_id: str
    :return: json
    """
    exercise = ExerciseService.get_exercise(exercise_id=exercise_id)
    return jsonify(exercise)


@exercise_bp.route('/exercises', methods=['POST'])
def create_exercise():
    """
    Create exercise
    :return: json
    """
    exercise = ExerciseService.create_exercise("WORD_ORDERING")
    return jsonify(exercise)
