document.addEventListener("DOMContentLoaded", function() {
  const modalForm = document.getElementById("modalFormAdopcion");
  const btnForm = document.getElementById("abrirModalFormAdopcion");
  const spanForm = document.getElementById("cerrarModalFormAdopcion");

  btnForm.onclick = function(event) {
      event.preventDefault(); 
      modalForm.style.display = "flex";
  }

  spanForm.onclick = function() {
      modalForm.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modalForm) {
          modalForm.style.display = "none";
      }
  }
});