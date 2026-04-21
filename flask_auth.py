
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import jwt
import datetime
import os
from business_py.user_service import UserService
from data_py.user_repository import UserRepository
from business_py.course_service import CourseService

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PRESENTATION_DIR = os.path.join(BASE_DIR, 'presentation')
app = Flask(__name__, static_folder=PRESENTATION_DIR, static_url_path='')
CORS(app)
app.config['SECRET_KEY'] = 'supersecretkey'

# Layered services
user_repository = UserRepository()
user_service = UserService(user_repository)
course_service = CourseService()

@app.route('/')
def root():
    return send_from_directory(PRESENTATION_DIR, 'index.html')

@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory(PRESENTATION_DIR, filename)

@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    first_name = data.get('firstName')
    last_name = data.get('lastName')
    password = data.get('password')
    age = data.get('age')
    success = user_service.register_user(email, first_name, last_name, password, age)
    if not success:
        return jsonify({'success': False, 'message': 'El usuario ya existe.'}), 400
    return jsonify({'success': True, 'message': 'Usuario registrado correctamente.'})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    if not user_service.authenticate_user(email, password):
        return jsonify({'success': False, 'message': 'Credenciales incorrectas.'}), 401
    token = jwt.encode({
        'email': email,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=2)
    }, app.config['SECRET_KEY'], algorithm='HS256')
    return jsonify({'success': True, 'token': token})

@app.route('/api/courses', methods=['GET'])
def get_courses():
    auth = request.headers.get('Authorization')
    if not auth or not auth.startswith('Bearer '):
        return jsonify({'success': False, 'message': 'Token requerido.'}), 401
    token = auth.split(' ')[1]
    try:
        jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
    except Exception:
        return jsonify({'success': False, 'message': 'Token inválido.'}), 401
    courses = course_service.get_courses()
    return jsonify({'success': True, 'courses': courses})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
