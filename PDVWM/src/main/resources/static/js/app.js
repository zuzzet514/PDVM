document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.menu a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();  // Evita el comportamiento predeterminado del enlace

            const targetId = link.getAttribute('href').substring(1); // Obtiene el ID de la sección
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 20, // Añade un pequeño margen superior
                    behavior: 'smooth'  // Desplazamiento suave
                });
            }
        });
    });
});