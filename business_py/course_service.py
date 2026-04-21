# business_py/course_service.py
import psycopg2
from psycopg2.extras import RealDictCursor

class CourseService:
    def __init__(self, db_url=None):
        self.db_url = db_url or "dbname='codekids_db' user='codekids_user' password='codekids_pass' host='postgres'"

    def get_connection(self):
        return psycopg2.connect(self.db_url)

    def get_courses(self):
        with self.get_connection() as conn:
            with conn.cursor(cursor_factory=RealDictCursor) as cur:
                cur.execute("SELECT titulo, descripcion, nivel, duracion_horas AS \"duracionHoras\", edad_minima AS \"edadMinima\", edad_maxima AS \"edadMaxima\" FROM cursos WHERE activo = TRUE")
                return cur.fetchall()
