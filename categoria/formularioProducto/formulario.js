const botonEliminar = document.getElementById("boton-eliminar");
const productosEliminarSelect = document.getElementById("productosEliminar");
const botonEditar = document.getElementById("boton-editar");

document.addEventListener("DOMContentLoaded", function () {
  const contenedorProductos = document.getElementById("mostrar-productos");
  const carritoContainer = document.getElementById("productos-carrito");
  const totalPrecioElement = document.getElementById("total-precio");
  const formBusqueda = document.getElementById("formBusqueda");
  const inputBusqueda = document.getElementById("busqueda");

  const params = new URLSearchParams(window.location.search);
  const categoria = params.get("categoria");


   // Mostrar productos filtrados por categoría al cargar la página
   if (categoria) {
    mostrarProductos(categoria);
  }
    // Escuchar cambios en el input de búsqueda
    if (inputBusqueda) {
      inputBusqueda.addEventListener("input", function () {
        mostrarProductos(categoria);
      });
    }

  // Escuchar el evento de 'submit' en el formulario de búsqueda
  if (formBusqueda) {
    formBusqueda.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita la recarga de la página
      mostrarProductos(categoria); // Realiza la búsqueda con el valor actual del input
    });
  }


   // Mostrar productos filtrados por categoría
function mostrarProductos(categoria) {
  const inputBusqueda = document.getElementById("busqueda");
  const terminoBusqueda = inputBusqueda ? inputBusqueda.value.toLowerCase() : "";

  fetch("http://localhost:8080/producto/traer")
  .then((response) => response.json())
  .then((data) => {
    // Si hay un término de búsqueda, filtrar solo por el nombre del producto
    const productosFiltrados = data.filter((producto) => {
      const coincideNombre = producto.nombre.toLowerCase().includes(terminoBusqueda);
      
      // Mostrar productos de cualquier categoría si hay un término de búsqueda, 
      // o filtrar por categoría si no hay búsqueda activa
      return terminoBusqueda ? coincideNombre : (producto.categoria === categoria && coincideNombre);
    });

    const cards = productosFiltrados
      .map((producto) => {
        const precioFormateado = producto.precio.toLocaleString("es-ES");
        const esFavorito = localStorage.getItem(`favorito_${producto.id_producto}`) === "true"; // Chequear si es favorito
        
        return `
            <div class="card container-card" style="width: 15rem;">
              <img src="${producto.imagen}" class="card-img-top imagen-product" alt="${producto.nombre}">
              <div class="card-body card-info-product">
                <i class="fa-heart fa-xl fav-icon ${esFavorito ? 'fa-solid' : 'fa-regular'}" style="color: #2F6A74;" data-id="${producto.id_producto}"></i>                 
                <h5 class="card-title title-product">${producto.nombre}</h5>
                <p class="card-text descrpcion-product">${producto.descripcion}</p>
                <h5 class="precio-product">$ ${precioFormateado}</h5>
                <div class="content-boton">
                  <button class="boton-huellapet agregar-carrito-btn" data-producto='${JSON.stringify(producto)}'>Agregar al carrito</button>
                </div>
              </div>
            </div>
          `;
      })
      .join("");
    contenedorProductos.innerHTML = cards;

    // Agregar event listener a todos los botones de "Agregar al carrito"
    const botonesCarrito = document.querySelectorAll(".agregar-carrito-btn");
    botonesCarrito.forEach((boton) => {
      boton.addEventListener("click", function () {
        const producto = JSON.parse(this.getAttribute("data-producto"));
        agregarAlCarrito(producto);
      });
    });

 // Agregar event listener a todos los íconos de "Agregar a favoritos"
 const iconosFavoritos = document.querySelectorAll(".fav-icon");
 iconosFavoritos.forEach((icono) => {
   icono.addEventListener("click", function () {
     const productoId = this.getAttribute("data-id");
     const esFavorito = localStorage.getItem(`favorito_${productoId}`) === "true";

     // Alternar entre el icono vacío y lleno
     if (esFavorito) {
       this.classList.add("fa-regular");
       this.classList.remove("fa-solid");
       localStorage.setItem(`favorito_${productoId}`, "false");
     } else {
       this.classList.add("fa-solid");
       this.classList.remove("fa-regular");
       localStorage.setItem(`favorito_${productoId}`, "true");
     }
      });
    });
  });
}

// Función para agregar al carrito
function agregarAlCarrito(producto) {
  // Verificar si el usuario está registrado
  const authToken = JSON.parse(localStorage.getItem("authToken"));

  if (!authToken) {
    return Swal.fire({
      icon: "warning",
      title: "Debe estar registrado",
      text: "Por favor, inicia sesión o regístrate para agregar productos al carrito.",
    });
  }

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const productoExistente = carrito.find((item) => item.id_producto === producto.id_producto);

  if (productoExistente) {
    productoExistente.cantidad += 1; // Aumentar cantidad si ya está en el carrito
  } else {
    producto.cantidad = 1;
    carrito.push(producto); // Agregar nuevo producto
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito(); // Actualizar el modal del carrito
}

// Inicializar el carrito en la carga de la página
mostrarCarrito();

// Evento para vaciar el carrito
const vaciarCarritoBtn = document.getElementById("vaciar-carrito-btn");
vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

// Evento para continuar con la compra
const continuarCompraBtn = document.getElementById("continuar-compra-btn");
continuarCompraBtn.addEventListener("click", function () {
  if (
    Swal.fire({
      title: "¿Deseas confimar compra?",
      text: "Continua con el proceso de compra para iniciar el envio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, deseo continuar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Compra Exitosa",
          text: "Estamos preparando tus productos. Gracias por tu compra.",
          icon: "success",
        });
        localStorage.removeItem("carrito"); // Vaciar el carrito
        mostrarCarrito(); // Vaciar el carrito
        actualizarTotal();
      }
    })
  ) {
  }
});
});

// Mover las funciones fuera de DOMContentLoaded para que sean accesibles globalmente
function mostrarCarrito() {
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const carritoContainer = document.getElementById("productos-carrito");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito-btn");
const totalCarritoBtn = document.getElementById("total-carrito");
const cartCountElement = document.getElementById("cart-count");
carritoContainer.innerHTML = "";

// Actualizar la cantidad total de productos en el carrito
const totalProductos = carrito.reduce(
  (acc, producto) => acc + producto.cantidad,
  0
);
cartCountElement.textContent = totalProductos;

if (carrito.length === 0) {
  carritoContainer.innerHTML = `<p class="carrito-vacio"> 
                                      <i class="fa-solid fa-cart-arrow-down fa-2xl" style="color: #2F6A74;"></i> 
                                  El carrito está vacío. <br> ¡Agrega nuevos productos!</p>`; // Mensaje cuando el carrito esté vacío
  vaciarCarritoBtn.style.display = "none";
  totalCarritoBtn.style.display = "none";
  cartCountElement.textContent = 0;
  return; // Salir de la función si el carrito está vacío
} else {
  vaciarCarritoBtn.style.display = "flex"; // Mostrar el botón si el carrito no está vacío
  totalCarritoBtn.style.display = "block";
}

carrito.forEach((producto, index) => {
  const precioFormateado = producto.precio.toLocaleString("es-ES");
  carritoContainer.innerHTML += `
        <div class="carrito-content">
          <img src="${producto.imagen}" class="imagen-carrito" alt="${producto.nombre}">
          <div class="carrito-content-info">
            <h5>${producto.nombre}</h5>
            <div class="carrito-content-botones"> 
              <p>$${precioFormateado}</p>
              <div>
              <button class="boton-carrito-compras" onclick="eliminarProducto(${index})">
              <i class="fa-solid fa-trash-can fa-2xs" style="color: #ffffff;"></i>
              </button>   
                <div> 
                <button class="boton-carrito-compras" onclick="cambiarCantidad(${index}, -1)">    
                    <i class="fa-solid fa-minus fa-2xs" style="color: #ffffff;"></i> 
                </button>
                ${producto.cantidad}
                <button class="boton-carrito-compras" onclick="cambiarCantidad(${index}, 1)">
                <i class="fa-solid fa-plus fa-2xs" style="color: #ffffff;"></i>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
});

actualizarTotal(); // Recalcular total
}

function cambiarCantidad(index, delta) {
let carrito = JSON.parse(localStorage.getItem("carrito"));
carrito[index].cantidad += delta;

if (carrito[index].cantidad <= 0) {
  carrito.splice(index, 1); // Eliminar si la cantidad es 0
}

localStorage.setItem("carrito", JSON.stringify(carrito));
mostrarCarrito(); // Actualizar el modal del carrito
}

function eliminarProducto(index) {
let carrito = JSON.parse(localStorage.getItem("carrito"));
carrito.splice(index, 1); // Eliminar producto por su índice
localStorage.setItem("carrito", JSON.stringify(carrito));
mostrarCarrito(); // Actualizar el modal del carrito
}

function actualizarTotal() {
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const totalPrecioElement = document.getElementById("total-precio");
let total = carrito.reduce(
  (suma, producto) => suma + producto.precio * producto.cantidad,
  0
);
totalPrecioElement.textContent = "$" + total.toLocaleString("es-ES");
}

// Función para vaciar el carrito
function vaciarCarrito() {
if (
  Swal.fire({
    title: "¿Desea vaciar el carrito?",
    text: "Se perderán tus productos seleccionados",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Carrito vacio",
        text: "Ingresa nuevos productos",
        icon: "success",
      });
      localStorage.removeItem("carrito"); // Vaciar el carrito
      mostrarCarrito(); // Actualizar la vista del carrito
    }
  })
) {
}
}

// Escuchar el envío del formulario para agregar nuevos productos
const productoForm = document.getElementById("productoForm");
if (productoForm) {
  productoForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado

    // Obtener los valores del formulario
    const imagen = document.getElementById("imagen").value;
    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const descripcion = document.getElementById("descripcion").value;
    const disponibilidad = document.getElementById("disponibilidad").checked;

    // Crear objeto para el nuevo producto sin id
    const nuevoProducto = {
      nombre: nombre,
      categoria: categoria,
      precio: precio,
      descripcion: descripcion,
      imagen: imagen,
      disponibilidad: disponibilidad
    };

    // Enviar solicitud POST para agregar el producto
    fetch("http://localhost:8080/producto/crear", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevoProducto)
    })
    .then(response => {
      // Comprobar el tipo de contenido de la respuesta
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return response.json();
      } else {
        return response.text(); // Si no es JSON, devolver como texto
      }
    })
    .then(data => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto agregado correctamente",
        showConfirmButton: false,
        timer: 1500
      });
    
      // Limpiar el formulario
      productoForm.reset();
    
      // Recargar los productos mostrados
      mostrarProductos(categoria);
    })
    .catch(error => {
      console.error("Error al agregar el producto:", error);
    });
     });
}


//Cargar productos en el select al cargar la página
  cargarProductos();

  // Cargar productos en el select
  function cargarProductos() {
    fetch("http://localhost:8080/producto/traer")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener productos");
        }
        return response.json();
      })
      .then((data) => {
        productosEliminarSelect.innerHTML = data.map(
          (producto) => `<option value="${producto.id_producto}">${producto.nombre}</option>`
        ).join("");
      })
      .catch((error) => console.error("Error al cargar productos:", error));
  }

  // Rellenar el formulario con datos del producto seleccionado para editar
  productosEliminarSelect.addEventListener("change", function () {
    const productoId = productosEliminarSelect.value;
    if (!productoId) return;

    fetch(`http://localhost:8080/producto/traer/${productoId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos del producto");
        }
        return response.json();
      })
      .then(producto => {
        // Rellenar los campos del formulario con los datos del producto
        document.getElementById("imagen").value = producto.imagen;
        document.getElementById("nombre").value = producto.nombre;
        document.getElementById("categoria").value = producto.categoria;
        document.getElementById("precio").value = producto.precio;
        document.getElementById("descripcion").value = producto.descripcion;
        document.getElementById("disponibilidad").checked = producto.disponibilidad;
      })
      .catch(error => console.error("Error al cargar los datos del producto:", error));
  });

  // Editar producto seleccionado
  botonEditar.addEventListener("click", function () {
    const productoId = productosEliminarSelect.value;
    if (!productoId) {
      alert("Por favor, selecciona un producto para editar.");
      return;
    }
  
    // Obtener los valores del formulario
    const imagen = document.getElementById("imagen").value;
    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const descripcion = document.getElementById("descripcion").value;
    const disponibilidad = document.getElementById("disponibilidad").checked;
  
    // Enviar solicitud PUT para actualizar el producto con los parámetros
    fetch(`http://localhost:8080/producto/editar/${productoId}?nombre=${nombre}&categoria=${categoria}&precio=${precio}&descripcion=${descripcion}&imagen=${imagen}&disponibilidad=${disponibilidad}`, {
      method: "PUT",
    })
    .then(response => response.json())
    .then(data => {
      console.log("Producto actualizado:", data);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto Actualizado Exitosamente",
        showConfirmButton: false,
        timer: 1500
      });
      
      // Recargar los productos mostrados y limpiar el formulario
      cargarProductos();
      productoForm.reset();
    })
    .catch(error => {
      console.error("Error al actualizar el producto:", error);
    });
  });
  

  // Eliminar producto seleccionado
  botonEliminar.addEventListener("click", function () {
    const productoId = productosEliminarSelect.value;
    if (!productoId) {
      alert("Por favor, selecciona un producto para eliminar.");
      return;
    }

    fetch(`http://localhost:8080/producto/borrar/${productoId}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Producto Eliminado",
            showConfirmButton: false,
            timer: 1500
          });

          cargarProductos(); // Recargar lista de productos después de eliminar
          productoForm.reset();
        } else {
          alert("Error al eliminar el producto");
        }
      })
      .catch((error) => console.error("Error al eliminar el producto:", error));
  });