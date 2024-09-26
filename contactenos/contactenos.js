document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-contacto");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const telInput = document.getElementById("tel");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Variables para rastrear si hay errores
    let hasError = false;

    // Validar nombre
    if (validator.isEmpty(nameInput.value.trim())) {
      alert("El nombre es obligatorio.");
      hasError = true;
    }

    // Validar correo electrónico
    if (!validator.isEmail(emailInput.value.trim())) {
      alert("El correo electrónico no es válido.");
      hasError = true;
    }

    // Validar teléfono (aquí puedes personalizarlo según el formato que desees)
    if (!validator.isMobilePhone(telInput.value.trim())) {
      alert("El número de teléfono no es válido.");
      hasError = true;
    }

    // Validar descripción (no debe estar vacía)
    if (validator.isEmpty(messageInput.value.trim())) {
      alert("La descripción es obligatoria.");
      hasError = true;
    }

    // Si no hay errores, permite que el formulario se envíe
    if (!hasError) {
      form.submit();
    }
  });
});