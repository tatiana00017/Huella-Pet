document.addEventListener('DOMContentLoaded', () => {
    const misCompras = document.getElementById('mis-compras');
  
    if (misCompras) {
        misCompras.addEventListener('click', (e) => {
            e.preventDefault();
            const authToken = JSON.parse(localStorage.getItem('authToken'));
            if (authToken && authToken.correo) {
                
                window.location.href = misCompras.href;
            } else {
                return Swal.fire({
                    icon: "warning",
                    title: "Debe estar registrado",
                    text: "Por favor, inicia sesión o regístrate para agregar productos al carrito.",
                }).then(() => {
                    const loginButton = document.querySelector('.btnInicio-login');
                    if (loginButton) {
                        loginButton.click(); 
                    }
                });
            }
        });
    }
});



  