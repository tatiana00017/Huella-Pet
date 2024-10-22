document.addEventListener("DOMContentLoaded", function() {
  const modalAdopcion = document.getElementById("modalRequisitos");
  const btnAdopcion = document.getElementById("abrirModalRequisitos");
  const spanAdopcion = document.getElementById("cerrarModalRequisitos");

  btnAdopcion.onclick = function(event) {
      event.preventDefault(); 
      modalAdopcion.style.display = "flex";
  }

  spanAdopcion.onclick = function() {
    modalAdopcion.style.display = "none";
  }

  modalAdopcion.addEventListener("click", function(event) {
      if (event.target ===  modalAdopcion) {
        modalAdopcion.style.display = "none";
      }
  })
});