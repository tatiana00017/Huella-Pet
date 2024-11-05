function inicializarModalRequisitos() {
  const modalAdopcion = document.getElementById("modalRequisitos");
  const btnAdopcion = document.getElementById("abrirModalRequisitos");
  const spanAdopcion = document.getElementById("cerrarModalRequisitos");

  if (btnAdopcion) {
      btnAdopcion.addEventListener("click", function(event) {
          event.preventDefault(); 
          modalAdopcion.style.display = "flex";
      });

      spanAdopcion.addEventListener("click", function() {
          modalAdopcion.style.display = "none";
      });

      window.addEventListener("click", function(event) {
          if (event.target === modalAdopcion) {
              modalAdopcion.style.display = "none";
          }
      });
  } else {
      console.error("El botón de formulario de adopción no se encontró.");
  }
}