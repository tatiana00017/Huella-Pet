document.addEventListener('DOMContentLoaded', () => {
    const misCompras = document.getElementById('mis-compras');
  
    if (misCompras) {
        misCompras.addEventListener('click', (e) => {
            e.preventDefault();
            const authToken = JSON.parse(localStorage.getItem('authToken'));
            if (authToken && authToken.correo) {
                
                window.location.href = misCompras.href;
            } else {
                
                alert("Debes iniciar sesión para acceder a Mis Compras.");
                const loginButton = document.querySelector('.btnInicio-login');
                if (loginButton) {
                    loginButton.click();
                }
            }
        });
    }
});


  