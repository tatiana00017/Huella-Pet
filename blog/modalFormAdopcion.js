function inicializarModalFormAdopcion() {
    const modalForm = document.getElementById("modalFormAdopcion");
    const btnForm = document.getElementById("abrirModalFormAdopcion");
    const spanForm = document.getElementById("cerrarModalFormAdopcion");

    if (btnForm) {
        btnForm.addEventListener("click", function(event) {
            event.preventDefault(); 
            modalForm.style.display = "flex";
        });

        spanForm.addEventListener("click", function() {
            modalForm.style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if (event.target === modalForm) {
                modalForm.style.display = "none";
            }
        });
    } else {
        console.error("El botón de formulario de adopción no se encontró.");
    }
}

