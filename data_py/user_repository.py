# data_py/user_repository.py
from werkzeug.security import generate_password_hash, check_password_hash

class UserRepository:
    def __init__(self):
        self.users = {}

    def get_user(self, email):
        return self.users.get(email)

    def add_user(self, email, first_name, last_name, password, age):
        if email in self.users:
            return False
        self.users[email] = {
            'firstName': first_name,
            'lastName': last_name,
            'password': generate_password_hash(password),
            'age': age
        }
        return True

    def check_password(self, email, password):
        user = self.get_user(email)
        if not user:
            return False
        return check_password_hash(user['password'], password)
