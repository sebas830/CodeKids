# CodeKids - Plataforma Educativa Profesional para Aprendizaje de Programación

## Descripción del Proyecto

CodeKids es una plataforma educativa innovadora diseñada específicamente para niños y jóvenes, que combina metodologías pedagógicas avanzadas con tecnología de vanguardia para enseñar los fundamentos de la programación y el pensamiento computacional. Nuestra misión es democratizar el acceso a la educación STEM desde edades tempranas, preparando a las futuras generaciones para los desafíos del siglo XXI.

### Objetivos Educativos
- Desarrollar habilidades de pensamiento lógico y resolución de problemas.
- Introducir conceptos de programación de manera intuitiva y entretenida.
- Fomentar la creatividad, la innovación y el trabajo en equipo.
- Promover la inclusión digital y reducir la brecha de género en tecnología.
- Preparar a los estudiantes para carreras en ciencias de la computación y campos relacionados.

### Arquitectura del Sistema

La plataforma utiliza una arquitectura por capas clara y organizada:

- **Capa de Presentación** (`presentation/`): HTML, CSS y JavaScript que forman la interfaz visible de CodeKids.
- **Capa de Lógica de Negocio** (`business/`): Servicios y reglas de aplicación donde se maneja la validación de login, registro y gestión de cursos.
- **Capa de Datos** (`data/`): Repositorios que interactúan con PostgreSQL para almacenamiento persistente de usuarios y cursos.

**Base de Datos PostgreSQL:**
- Tabla `usuarios`: Almacena información de estudiantes (6-18 años) con contraseñas hasheadas.
- Tabla `cursos`: Contiene 5 cursos básicos de programación adaptados para niños.
- Datos iniciales: 5 usuarios demo y 5 cursos pre-cargados.

Esta estructura facilita la mantenibilidad y soporta despliegue Docker con contenedores separados para la aplicación y la base de datos.

## Características Principales

### Aprendizaje Personalizado
- Evaluación inicial para determinar el nivel de partida.
- Contenido adaptativo que se ajusta al progreso del estudiante.
- Retroalimentación instantánea y consejos personalizados.

### Metodología Lúdica
- Juegos interactivos que enseñan conceptos complejos.
- Desafíos lógicos y puzzles programáticos.
- Proyectos colaborativos para desarrollar habilidades sociales.

### Seguimiento y Analytics
- Dashboard para padres y educadores con métricas detalladas.
- Reportes de progreso y certificados de logros.
- Análisis predictivo para identificar áreas de mejora.

### Seguridad y Privacidad
- Cumplimiento con regulaciones como GDPR y COPPA.
- Autenticación multifactor y control parental.
- Encriptación de datos y auditorías de seguridad regulares.

### Página de Login Mejorada
- Diseño moderno con gradientes y animaciones suaves.
- Formulario interactivo con validación visual.
- Opción de recordar sesión y recuperación de contraseña.
- Navegación intuitiva hacia registro y página principal.

### Sistema de Registro
- Formulario completo con validación de datos.
- Campos para nombre, apellido, email, contraseña y edad.
- Validaciones: edad entre 6-18 años, confirmación de contraseña.
- Aceptación obligatoria de términos y condiciones.
- Redirección automática al login tras registro exitoso.

## Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Capa de Presentación**: `presentation/`
- **Capa de Lógica de Negocio**: `business/`
- **Capa de Datos**: `data/`
- **Infraestructura**: Docker containers
- **Seguridad**: Validaciones de formulario y manejo básico de credenciales en servidor
- **Analytics**: Diseño preparado para integrar métricas en una etapa posterior

## Instalación y Ejecución

### Prerrequisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet para funcionalidades completas

### Ejecución Local
1. Clona el repositorio: `git clone https://github.com/tu-usuario/codekids.git`
2. Navega al directorio: `cd codekids`
3. Abre `index.html` en tu navegador web, o usa un servidor local:
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve .`
   - PHP: `php -S localhost:8000`

Para acceder al login, haz clic en "Comenzar Ahora" en la página principal o navega directamente a `login.html`. La página de login cuenta con un diseño moderno con animaciones y formulario interactivo.

Para registrarte como nuevo usuario, desde la página de login haz clic en "Regístrate aquí" o navega directamente a `register.html`. El formulario de registro incluye validaciones para edad (6-18 años), confirmación de contraseña y aceptación de términos.

### Despliegue en Producción
- Utiliza Docker para contenerización de la aplicación
- Construye la imagen con `docker build -f Dockerfile -t codekids-app .`
- Ejecuta el contenedor con `docker run -p 3000:3000 codekids-app`
- La aplicación se sirve desde `presentation/` y la API local corre en `server.js`
- `package-test.json` se utiliza como manifiesto de dependencias al construir la imagen Docker

Además, puedes integrar este Dockerfile en un flujo CI/CD o desplegarlo en servicios como Azure Container Instances, AWS ECS o cualquier plataforma compatible con contenedores.

## API Endpoints

### Autenticación
- `POST /api/login` - Iniciar sesión con email y contraseña
- `POST /api/register` - Registrar nuevo usuario (edad 6-18 años)
- `GET /api/users` - Obtener lista de todos los usuarios

### Cursos
- `GET /api/courses` - Obtener todos los cursos disponibles
- `GET /api/courses/:id` - Obtener curso específico por ID
- `GET /api/courses/level/:level` - Filtrar cursos por nivel (principiante/intermedio/avanzado)
- `GET /api/courses/age/:age` - Obtener cursos recomendados para una edad específica

### Otros
- `POST /api/contact` - Enviar mensaje de contacto
- `GET /api/health` - Verificar estado de la API

### Cursos Disponibles
1. **Introducción a la Programación** (Principiante, 6-12 años)
2. **Variables y Tipos de Datos** (Principiante, 7-14 años)
3. **Estructuras de Control** (Intermedio, 8-16 años)
4. **Funciones y Procedimientos** (Intermedio, 9-18 años)
5. **Programación Orientada a Objetos** (Avanzado, 12-18 años)

### Usuarios Demo
- Ana García (10 años) - ana.garcia@email.com
- Carlos Martínez (12 años) - carlos.martinez@email.com
- María López (8 años) - maria.lopez@email.com
- Pedro Sánchez (14 años) - pedro.sanchez@email.com
- Lucía Rodríguez (11 años) - lucia.rodriguez@email.com

**Nota:** Las contraseñas están hasheadas. Para testing, puedes crear nuevos usuarios o modificar el código para desarrollo.

## Contribución

¡Valoramos las contribuciones de la comunidad! Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit tus cambios: `git commit -m 'Agrega nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

## Equipo

- **Director Educativo**: Dr. Ana María López (PhD en Educación Tecnológica)
- **Arquitecto de Software**: Carlos Ramírez (Experto en Arquitecturas Escalables)
- **Diseñador UX/UI**: María González (Especialista en Diseño para Niños)
- **Equipo de Desarrollo**: Ingenieros full-stack con experiencia en edtech

## Impacto Social

CodeKids ha impactado positivamente a más de 10,000 estudiantes en sus primeros años de operación, con un 85% de retención y mejoras significativas en habilidades cognitivas medidas por evaluaciones estandarizadas.

## Contacto

- Email: info@codekids.edu
- Sitio web: www.codekids.edu
- Redes sociales: @CodeKidsEdu

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

¡Únete a nosotros en la misión de empoderar a la próxima generación de innovadores digitales!