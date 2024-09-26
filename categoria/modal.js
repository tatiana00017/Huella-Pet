document.addEventListener("DOMContentLoaded", function() {
    var botonCategoria = document.querySelectorAll(".boton-categorias");
    var cardCategoria = document.querySelector(".modal-card");
    var botonCerrar = document.querySelector(".boton-cerrar");
  
    botonCategoria.forEach(function(boton) {
      boton.addEventListener("click", function() {
        // Cambiar la visibilidad del modal
        cardCategoria.style.display = "block"; // Mostrar
      });
    });
  
    botonCerrar.addEventListener("click", function(event) {
        // Ocultar el modal al hacer clic en el icono de cerrar
        cardCategoria.style.display = "none";
        // Detener la propagación del evento para evitar que se propague al contenedor .registro--content
        event.stopPropagation();
    });
  
    cardCategoria.addEventListener("click", function(event) {
        // Ocultar el modal al hacer clic fuera de él (en el fondo oscuro)
        if (event.target === cardCategoria) {
            cardCategoria.style.display = "none";
        }
    });
  });