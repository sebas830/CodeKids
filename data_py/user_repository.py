# data_py/user_repository.py

import psycopg2
from psycopg2.extras import RealDictCursor
from werkzeug.security import generate_password_hash, check_password_hash

class UserRepository:
    def __init__(self, db_url=None):
        # Puedes pasar la URL de conexión o usar una por defecto
        self.db_url = db_url or "dbname='codekids_db' user='codekids_user' password='codekids_pass' host='postgres'"

    def get_connection(self):
        return psycopg2.connect(self.db_url)

    def get_user(self, email):
        with self.get_connection() as conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute("SELECT * FROM usuarios WHERE email = %s", (email,))
                return cur.fetchone()

    def add_user(self, email, first_name, last_name, password, age):
        if self.get_user(email):
            return False
        password_hash = generate_password_hash(password)
        with self.get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    """
                    INSERT INTO usuarios (nombre, apellido, email, password_hash, edad)
                    VALUES (%s, %s, %s, %s, %s)
                    """,
                    (first_name, last_name, email, password_hash, age)
                )
                conn.commit()
        return True

    def check_password(self, email, password):
        user = self.get_user(email)
        if not user:
            return False
        return check_password_hash(user['password_hash'], password)
