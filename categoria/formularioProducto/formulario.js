document.addEventListener("DOMContentLoaded", function () {
  const contenedorProductos = document.getElementById("mostrar-productos");
  const carritoContainer = document.getElementById("productos-carrito");
  const totalPrecioElement = document.getElementById("total-precio");

  const params = new URLSearchParams(window.location.search);
  const categoria = params.get("categoria");

  // Mostrar productos según categoría
  if (categoria) {
    mostrarProductos(categoria);
  }

   // Mostrar productos filtrados por categoría
function mostrarProductos(categoria) {
  fetch("http://localhost:3000/productos")
    .then((response) => response.json())
    .then((data) => {
      const productosFiltrados = data.filter(
        (producto) => producto.categoria === categoria
      );
      const cards = productosFiltrados
        .map((producto) => {
          const precioFormateado = producto.precio.toLocaleString("es-ES");
          const esFavorito = localStorage.getItem(`favorito_${producto.id}`) === "true"; // Chequear si es favorito
          
          return `
              <div class="card container-card" style="width: 17rem;">
                <img src="${producto.imagen}" class="card-img-top imagen-product" alt="${producto.nombre}">
                <div class="card-body card-info-product">
                  <i class="fa-heart fa-xl fav-icon ${esFavorito ? 'fa-solid' : 'fa-regular'}" style="color: #2F6A74;" data-id="${producto.id}"></i>                 
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
          this.classList.toggle("fa-regular");
          this.classList.toggle("fa-solid");

          // Actualizar el estado en localStorage
          if (esFavorito) {
            localStorage.setItem(`favorito_${productoId}`, "false");
          } else {
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
    const productoExistente = carrito.find((item) => item.id === producto.id);

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
            text: "Tus productos estan en camino",
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
