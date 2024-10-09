document.addEventListener("DOMContentLoaded", function() {
    var botonInicioSesion = document.querySelectorAll(".btnInicio-login");
    var cardInicioSesion = document.querySelector(".modal-login");
    var botonCerrarSesion = document.querySelector(".cerrar-login");
    var botonRegistro = document.querySelector(".cerrar-registro");
  
    botonInicioSesion.forEach(function(boton) {
      boton.addEventListener("click", function() {
        // Cambiar la visibilidad del modal
        cardInicioSesion.style.display = "flex"; // Mostrar
        console.log("hola")
      });

    });

     botonCerrarSesion.addEventListener("click", function(event) {
        // Ocultar el modal al hacer clic en el icono de cerrar
        cardInicioSesion.style.display = "none";
        // Detener la propagación del evento para evitar que se propague al contenedor .registro--content
        event.stopPropagation();
    });

    botonRegistro.addEventListener("click", function(event) {
      // Ocultar el modal al hacer clic en el icono de cerrar
      cardInicioSesion.style.display = "none";
      // Detener la propagación del evento para evitar que se propague al contenedor .registro--content
      event.stopPropagation();
    });
  
    cardInicioSesion.addEventListener("click", function(event) {
        // Ocultar el modal al hacer clic fuera de él (en el fondo oscuro)
        if (event.target === cardInicioSesion) {
            cardInicioSesion.style.display = "none";
        }
    });
    
  });