# business_py/user_service.py
from data_py.user_repository import UserRepository

class UserService:
    def __init__(self, user_repository):
        self.user_repository = user_repository

    def register_user(self, email, first_name, last_name, password, age):
        return self.user_repository.add_user(email, first_name, last_name, password, age)

    def authenticate_user(self, email, password):
        return self.user_repository.check_password(email, password)

    def get_user(self, email):
        return self.user_repository.get_user(email)
