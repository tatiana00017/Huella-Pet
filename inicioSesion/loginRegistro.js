// Lógica del login 
const loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const correo = document.querySelector('#correo').value;
    const password = document.querySelector('#password').value;
    const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    // Realizo una busque dentro de mi data por medio del find para poderle dar acceso a la aplicación
    const validarUsuario = Usuarios.find(usuario => usuario.correo === correo && usuario.password === password)
    // si me trae un undefined quere decir que el usuario ingreso mal alguno de los campos
    // Entonces para ello salimos de la función
    if(!validarUsuario){
        return alert('Usuario y/o contraseña incorrectos')
    }
    alert(`Bienvenido ${validarUsuario.nombreApellido}`)

    

})

//Lógica del registro 

const signupForm = document.querySelector('#registroForm');

signupForm.addEventListener('submit', (e)=> {
  e.preventDefault() //para que no se nos recarge la pagina
  const nombreApellido = document.querySelector('#nombreApellido').value;
  const correo = document.querySelector('#correo').value;
  const password = document.querySelector('#password').value;
  const opcGato = document.querySelector('#gato').value;
  const opcPerro = document.querySelector('#perro').value;
  // const ciudad = document.querySelector('#').value;
  // const direccion = document.querySelector('#').value;
  // const telefono = document.querySelector('#').value;

  const Usuarios = JSON.parse(localStorage.getItem('usuarios')) || [] // Guarda o mantiene el array vacio
  const esUsuarioRegistrado = Usuarios.find(usuario => usuario.correo === correo)
  //valido
  if(esUsuarioRegistrado){
    return alert('El usuario ya se encuentra registrado!')
  }

  //sino está registrado tendriamos que agregarlo a la db:
  Usuarios.push({nombreApellido:nombreApellido,correo:correo, password:password,opcGato:opcGato,opcPerro:opcPerro})
  localStorage.setItem('usuarios',JSON.stringify(Usuarios))
  alert('Registro Exitoso!')
  signupForm.reset();
  
})

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












