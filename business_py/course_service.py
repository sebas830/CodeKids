# business_py/course_service.py
class CourseService:
    def __init__(self):
        self.courses = [
            {'titulo': 'Python Básico', 'nivel': 'básico', 'descripcion': 'Aprende Python desde cero.', 'edadMinima': 8, 'edadMaxima': 14, 'duracionHoras': 20},
            {'titulo': 'Web con HTML/CSS', 'nivel': 'básico', 'descripcion': 'Crea tus primeras páginas web.', 'edadMinima': 8, 'edadMaxima': 16, 'duracionHoras': 18}
        ]

    def get_courses(self):
        return self.courses
