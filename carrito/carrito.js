document.addEventListener("DOMContentLoaded", function() {
    var botonCarritoCompras = document.querySelectorAll(".btn-carrito");
    var cardCarritoCompras = document.querySelector(".modal-carrito");
    var botonCerrarCarrito= document.querySelector(".cerrar-carrito");
  
    botonCarritoCompras.forEach(function(boton) {
      boton.addEventListener("click", function() {
        // Cambiar la visibilidad del modal
        cardCarritoCompras.style.display = "flex"; // Mostrar
      });

    });

    botonCerrarCarrito.addEventListener("click", function(event) {
        // Ocultar el modal al hacer clic en el icono de cerrar
        cardCarritoCompras.style.display = "none";
        // Detener la propagación del evento para evitar que se propague al contenedor .registro--content
        event.stopPropagation();
    });
  
    cardCarritoCompras.addEventListener("click", function(event) {
        // Ocultar el modal al hacer clic fuera de él (en el fondo oscuro)
        if (event.target === cardCarritoCompras) {
            cardCarritoCompras.style.display = "none";
        }
    });
    
  });