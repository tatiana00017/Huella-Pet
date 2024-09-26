// Selecciona todos los miembros del equipo
const teamMembers = document.querySelectorAll('.team-member');

// Agrega un evento de clic a cada miembro del equipo
teamMembers.forEach(member => {
    member.addEventListener('click', () => {
        // Agrega la clase 'clicked' para activar la animación
        member.classList.toggle('clicked');
    });
});

