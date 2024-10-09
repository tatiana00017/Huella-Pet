// Lógica del login 
const loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const correo = document.querySelector('#correo-login').value;
  const password = document.querySelector('#password-login').value;
  const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  
  const validarUsuario = Usuarios.find(usuario => {
      const decryptedCorreo = CryptoJS.AES.decrypt(usuario.correo, 'clave-secreta').toString(CryptoJS.enc.Utf8);
      const decryptedPassword = CryptoJS.AES.decrypt(usuario.password, 'clave-secreta').toString(CryptoJS.enc.Utf8);
      return decryptedCorreo === correo && decryptedPassword === password;
  });

  function extraerDominioCorreo(correo) {
    const regex = /@([a-zA-Z0-9-]+\.[a-zA-Z]{2,})/;
    const match = correo.match(regex);
    return match ? match[1] : null;
}

  if (!validarUsuario) {
      return alert('Usuario y/o contraseña incorrectos');
  } else {
    alert(`Bienvenido ${validarUsuario.nombreApellido}`);
    document.querySelector(".btnInicio-login").innerHTML = `<i class="fa-solid fa-user icon-nav "></i> Hola, ${validarUsuario.nombreApellido}`

    if(extraerDominioCorreo(correo) == "huellapet.com"){
      window.location.href = '/Huella-Pet/categoria/formularioProducto/formulario.html'
    }    
  }

});
//Lógica del registro 

const signupForm = document.querySelector('#registroForm');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombreApellido = document.querySelector('#nombreApellido').value;
  const correo = document.querySelector('#correo-registro').value;
  const password = document.querySelector('#password-registro').value;
  const opcGato = document.querySelector('#gato').checked;
  const opcPerro = document.querySelector('#perro').checked;

  const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const esUsuarioRegistrado = Usuarios.find(usuario => usuario.correo === correo);

  if (esUsuarioRegistrado) {
      return alert('El usuario ya se encuentra registrado!');
  }

  // Encriptar correo y password usando AES
  const encryptedCorreo = CryptoJS.AES.encrypt(correo, 'clave-secreta').toString();
  const encryptedPassword = CryptoJS.AES.encrypt(password, 'clave-secreta').toString();

  Usuarios.push({
      nombreApellido: nombreApellido,
      correo: encryptedCorreo,
      password: encryptedPassword,
      opcGato: opcGato,
      opcPerro: opcPerro
  });

  localStorage.setItem('usuarios', JSON.stringify(Usuarios));
  alert('Registro Exitoso!');
  signupForm.reset();

  formLogin.style.display = "block";
  formRegistro.style.display = "none";
});

// Lógica mostrar login  y registro

const btnIncio = document.getElementById('login-iniciar-sesion');
const btnRegistro = document.getElementById('login-registro');
const formLogin = document.querySelector('.mostrar-login'); 
const formRegistro= document.querySelector('.mostrar-registro');

btnIncio.addEventListener('click',e =>{
  formRegistro.style.display="block"
  formLogin.style.display="none"
})

btnRegistro.addEventListener('click',e =>{
  formLogin.style.display="block"
  formRegistro.style.display="none"
})












