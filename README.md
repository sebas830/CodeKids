
# CodeKids - Plataforma Educativa para Niños y Jóvenes

## Descripción del Proyecto

CodeKids es una plataforma educativa interactiva y moderna, diseñada para que niños y jóvenes aprendan programación y pensamiento computacional de forma divertida y segura. Nuestra misión es democratizar el acceso a la educación STEM desde edades tempranas, preparando a las futuras generaciones para los desafíos del siglo XXI.

## Objetivos Educativos
- Desarrollar habilidades de pensamiento lógico y resolución de problemas.
- Introducir conceptos de programación de manera intuitiva y entretenida.
- Fomentar la creatividad, la innovación y el trabajo en equipo.
- Promover la inclusión digital y reducir la brecha de género en tecnología.
- Preparar a los estudiantes para carreras en ciencias de la computación y campos relacionados.

## Arquitectura del Sistema

La plataforma está organizada en capas:
- **Capa de Presentación** (`presentation/`): HTML, CSS y JavaScript para la interfaz web, con animaciones, diseño responsivo y actividades interactivas.
- **Capa de Lógica de Negocio** (`business_py/`): Servicios en Python que gestionan la lógica de usuarios y cursos.
- **Capa de Datos** (`data_py/`): Repositorios en Python que interactúan con PostgreSQL para almacenar usuarios y cursos.

**Base de Datos PostgreSQL:**
- Tabla `usuarios`: Almacena información de estudiantes (sin restricción de edad mínima/máxima) y contraseñas hasheadas.
- Tabla `cursos`: Contiene cursos de programación para niños, cargados desde `init-db.sql`.

El backend está construido en Python/Flask y sirve tanto la API como los archivos estáticos del frontend. Todo el sistema se puede desplegar fácilmente usando Docker y docker-compose.

## Características Principales

- Registro y login seguro con JWT y contraseñas hasheadas
- Interfaz profesional, responsiva y animada
- Cursos cargados desde la base de datos y mostrados dinámicamente
- Cada curso incluye al menos 3 conocimientos interactivos con actividades para niños
- Navegación protegida: solo usuarios autenticados pueden ver los cursos
- Docker y docker-compose para despliegue rápido y persistencia de datos

## Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+), animaciones y diseño responsivo
- **Backend**: Python 3, Flask
- **Base de datos**: PostgreSQL
- **Infraestructura**: Docker, docker-compose
- **Seguridad**: JWT, contraseñas hasheadas con werkzeug

## Instalación y Ejecución

### Prerrequisitos
- Docker y docker-compose instalados

### Ejecución Local con Docker
1. Clona el repositorio: `git clone https://github.com/tu-usuario/codekids.git`
2. Navega al directorio: `cd codekids`
3. Ejecuta: `docker-compose up --build`
4. Accede a la plataforma en [http://localhost:3000](http://localhost:3000)

El backend Flask sirve tanto la API como los archivos estáticos del frontend. La base de datos PostgreSQL se inicializa automáticamente con los cursos definidos en `init-db.sql`.

### Despliegue en Producción
- Usa Docker y docker-compose para un despliegue sencillo y seguro
- Compatible con cualquier plataforma que soporte contenedores (Azure, AWS, GCP, etc.)

## API Endpoints

### Autenticación
- `POST /api/login` - Iniciar sesión con email y contraseña
- `POST /api/register` - Registrar nuevo usuario

### Cursos
- `GET /api/courses` - Obtener todos los cursos disponibles (requiere autenticación)

### Cursos Disponibles (ejemplo)
1. **Introducción a la Programación**
2. **Variables y Tipos de Datos**
3. **Estructuras de Control**
4. **Funciones y Procedimientos**
5. **Programación Orientada a Objetos**

Cada curso incluye conocimientos interactivos y actividades para niños.

**Nota:** Ya no existen usuarios demo ni restricciones de edad. El registro es abierto y persistente en la base de datos PostgreSQL.

## Contribución

¡Valoramos las contribuciones de la comunidad! Para contribuir:
1. Haz fork del proyecto
2. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit tus cambios: `git commit -m 'Agrega nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request


## Equipo

- **Líder y Desarrollador Principal**: Sebastian Ramírez (sebas830)
- **Director Educativo**: Dr. Ana María López (PhD en Educación Tecnológica)
- **Arquitecto de Software**: Carlos Ramírez (Arquitectura Python/Flask/PostgreSQL)
- **Diseñador UX/UI**: María González (Especialista en Diseño para Niños)

¡Gracias a todos los colaboradores y a la comunidad CodeKids!

## Impacto Social

CodeKids ha impactado positivamente a miles de estudiantes, promoviendo el aprendizaje de programación desde edades tempranas y fomentando la creatividad y el pensamiento lógico.

## Contacto

- Email: info@codekids.edu
- Sitio web: www.codekids.edu
- Redes sociales: @CodeKidsEdu

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

¡Únete a nosotros en la misión de empoderar a la próxima generación de innovadores digitales!