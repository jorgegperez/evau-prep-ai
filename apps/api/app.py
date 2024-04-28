"""Main application file"""

import sys
from flask import Flask
from resources.user.user_controller import users_bp
from resources.exercise.exercise_controller import exercise_bp


sys.path.append('..')


app = Flask(__name__)


@app.route('/')
def index():
    """
    Index route
    :return: str
    """
    return '<h1>Welcome to the API</h1>'


app.register_blueprint(users_bp)
app.register_blueprint(exercise_bp)
print(app.root_path)


if __name__ == '__main__':
    app.run(debug=True)
