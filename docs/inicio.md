# Diagrama General del Proyecto

```mermaid
flowchart TD
	A[Usuario] -->|Navegador| B[Frontend (HTML/CSS/JS)]
	B -->|Solicitudes HTTP| C[Backend Flask]
	C -->|Consultas SQL| D[(PostgreSQL)]
	C -->|Archivos estáticos| B
```

# Tabla de Roles

| Rol         | Descripción                                      |
|-------------|--------------------------------------------------|
| Estudiante  | Aprende y navega por los cursos                  |
| Docente     | Supervisa y recomienda contenidos (futuro)       |
| Administrador| Gestiona cursos y usuarios (futuro)             |
# Bienvenido a CodeKids

CodeKids es una plataforma educativa interactiva y profesional, diseñada para que niños y jóvenes aprendan programación y pensamiento computacional de manera divertida, segura y moderna.

## ¿Qué es CodeKids?
CodeKids combina tecnología de vanguardia, pedagogía lúdica y una interfaz atractiva para democratizar el acceso a la educación STEM desde edades tempranas. El sistema está pensado para ser fácil de usar, seguro y motivador para estudiantes, docentes y familias.

## ¿Qué puedes hacer con CodeKids?
- Registrarte y crear tu usuario de manera segura.
- Acceder a cursos de programación adaptados para niños.
- Explorar conocimientos interactivos y actividades en cada curso.
- Aprender a tu ritmo, desde cualquier dispositivo con navegador web.

## Público objetivo
Niños, niñas y jóvenes que deseen iniciarse en la programación, así como docentes y familias que buscan recursos educativos digitales de calidad.

## ¿Por qué elegir CodeKids?
- Interfaz profesional, amigable y responsiva.
- Seguridad y privacidad de los datos.
- Despliegue sencillo con Docker.
- Arquitectura moderna y mantenible.

¡Comienza a explorar y aprende jugando con CodeKids!