document.addEventListener("DOMContentLoaded", function () {
    const contenedorFavoritos = document.getElementById("productos-favoritos");
  
    // Función para cargar productos favoritos desde localStorage
    function cargarProductosFavoritos() {
      fetch("http://localhost:3000/productos")
        .then((response) => response.json())
        .then((data) => {
          // Filtrar productos que están guardados como favoritos en localStorage
          const productosFavoritos = data.filter((producto) =>
            localStorage.getItem(`favorito_${producto.id}`) === "true"
          );
  
          if (productosFavoritos.length === 0) {
            contenedorFavoritos.innerHTML = '<div class="alert alert-info text-center" role="alert">No tienes productos favoritos aún.</div>';
            return;
        }
        
        
          // Generar las tarjetas de los productos favoritos
          const cards = productosFavoritos
            .map((producto) => {
              const precioFormateado = producto.precio.toLocaleString("es-ES");
  
              return `
                <div class="card container-card" style="width: 17rem;">
                  <img src="${producto.imagen}" class="card-img-top imagen-product" alt="${producto.nombre}">
                  <div class="card-body card-info-product">
                    <h5 class="card-title title-product">${producto.nombre}</h5>
                    <p class="card-text descrpcion-product">${producto.descripcion}</p>
                    <h5 class="precio-product">$ ${precioFormateado}</h5>
                    <div class="content-boton">
                      <button class="boton-huellapet quitar-favorito-btn" data-id="${producto.id}">Quitar de Favoritos</button>
                    </div>
                  </div>
                </div>
              `;
            })
            .join("");
  
          contenedorFavoritos.innerHTML = cards;
  
          // Agregar funcionalidad a los botones para quitar productos de favoritos
          const botonesQuitarFavorito = document.querySelectorAll(".quitar-favorito-btn");
          botonesQuitarFavorito.forEach((boton) => {
            boton.addEventListener("click", function () {
              const productoId = this.getAttribute("data-id");
              quitarDeFavoritos(productoId);
            });
          });
        })
        .catch((error) => {
          console.error("Error al cargar los productos favoritos:", error);
        });
    }
  
    // Función para quitar productos de favoritos
    function quitarDeFavoritos(productoId) {
      localStorage.setItem(`favorito_${productoId}`, "false");
      cargarProductosFavoritos(); // Recargar los productos favoritos después de quitar uno
    }
  
    // Cargar productos favoritos al cargar la página
    cargarProductosFavoritos();
  });