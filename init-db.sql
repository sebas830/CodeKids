CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    edad INTEGER NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE
);

-- Limpiar usuarios existentes
TRUNCATE TABLE usuarios RESTART IDENTITY CASCADE;

-- Crear tabla de cursos
CREATE TABLE IF NOT EXISTS cursos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    descripcion TEXT NOT NULL,
    nivel VARCHAR(50) NOT NULL, -- principiante, intermedio, avanzado
    duracion_horas INTEGER NOT NULL,
    edad_minima INTEGER DEFAULT 6,
    edad_maxima INTEGER DEFAULT 18,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT TRUE
);




-- Insertar cursos de ejemplo
INSERT INTO cursos (titulo, descripcion, nivel, duracion_horas, edad_minima, edad_maxima) VALUES
('Introducción a la Programación', 'Aprende los conceptos básicos de la programación con juegos y actividades divertidas. Descubre qué es un algoritmo y cómo piensan las computadoras.', 'principiante', 10, 6, 12),
('Variables y Tipos de Datos', 'Explora cómo almacenar información en la programación. Aprende sobre números, texto y valores booleanos con ejemplos sencillos.', 'principiante', 8, 7, 14),
('Estructuras de Control', 'Domina las decisiones y repeticiones en código. Aprende if/else, bucles y cómo hacer que tus programas tomen decisiones inteligentes.', 'intermedio', 12, 8, 16),
('Funciones y Procedimientos', 'Crea bloques de código reutilizables. Aprende a escribir funciones que simplifican y organizan tu código de manera eficiente.', 'intermedio', 15, 9, 18),
('Programación Orientada a Objetos', 'Descubre el mundo de los objetos en programación. Aprende sobre clases, objetos y herencia con ejemplos visuales y prácticos.', 'avanzado', 20, 12, 18);