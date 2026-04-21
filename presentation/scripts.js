// Protección de cursos.html: redirigir si no hay sesión
if (window.location.pathname.endsWith('cursos.html')) {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = 'login.html';
    }
}
// scripts.js - Interactividad profesional para CodeKids

document.addEventListener('DOMContentLoaded', function() {
    console.log('Bienvenido a CodeKids - Plataforma Educativa Profesional');

    // Efecto typewriter para el título
    typeWriterEffect();

    // Animación de carga inicial
    animateOnLoad();

    // Navegación suave solo para index.html
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        smoothScrollTo(targetSection);
                        this.style.animation = 'pulse 0.6s ease';
                        setTimeout(() => this.style.animation = '', 600);
                    }
                }
            });
        });
    }

    // Animaciones al hacer scroll usando IntersectionObserver
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in-scroll, .slide-up-scroll, .zoom-in-scroll').forEach(el => {
        scrollObserver.observe(el);
    });

    // Manejo del formulario de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;

            try {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });
                const data = await response.json();
                if (data.success) {
                    // Guardar token en localStorage
                    localStorage.setItem('token', data.token);
                    // Redirigir a cursos.html
                    window.location.href = 'cursos.html';
                } else {
                    alert(data.message || 'Credenciales incorrectas.');
                }
            } catch (err) {
                alert('Error de conexión. Intenta de nuevo.');
            }
        });
    }

    // Manejo del formulario de registro
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const firstName = this.querySelector('#first-name').value;
            const lastName = this.querySelector('#last-name').value;
            const email = this.querySelector('#register-email').value;
            const password = this.querySelector('#register-password').value;
            const confirmPassword = this.querySelector('#confirm-password').value;
            const age = parseInt(this.querySelector('#age').value);
            const termsAccepted = this.querySelector('#terms').checked;

            // Validaciones básicas
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden. Por favor, verifica.');
                return;
            }
            if (age < 6 || age > 18) {
                alert('La edad debe estar entre 6 y 18 años.');
                return;
            }
            if (!termsAccepted) {
                alert('Debes aceptar los términos y condiciones para registrarte.');
                return;
            }

            try {
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ firstName, lastName, email, password, age })
                });
                const data = await response.json();
                if (data.success) {
                    alert(`¡Bienvenido a CodeKids, ${firstName}! Tu cuenta ha sido creada exitosamente.`);
                    this.reset();
                    setTimeout(() => {
                        window.location.href = 'login.html';
                    }, 2000);
                } else {
                    alert(data.message || 'No se pudo registrar.');
                }
            } catch (err) {
                alert('Error de conexión. Intenta de nuevo.');
            }
        });
    }



    // Formulario de contacto
    const contactForm = document.querySelector('#contacto form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            console.log('Mensaje de contacto:', { name, email, message });
            alert(`¡Gracias por tu mensaje, ${name}! Nos pondremos en contacto pronto.`);

            this.reset();
        });
    }
});

// Función para scroll suave
function smoothScrollTo(element) {
    const targetPosition = element.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const newPosition = easeInOutQuad(progress, startPosition, distance, duration);
        window.scrollTo(0, newPosition);

        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    });
}

// Función de easing
function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

// Animación al cargar
function animateOnLoad() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Función para animar reset de formulario
function animateFormReset(form) {
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach((input, index) => {
        setTimeout(() => {
            input.style.animation = 'pulse 0.3s ease';
            setTimeout(() => input.style.animation = '', 300);
        }, index * 50);
    });
}

// Función para efecto typewriter
function typeWriterEffect() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;

    const text = 'Aprende a Programar de Forma Divertida y Profesional';
    let index = 0;
    const speed = 50; // Velocidad en ms

    function type() {
        if (index < text.length) {
            typewriterElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    // Iniciar después de 500ms
    setTimeout(type, 500);
}

