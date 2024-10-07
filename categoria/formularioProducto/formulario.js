document.addEventListener("DOMContentLoaded", function() {
    const contenedorProductos = document.getElementById("mostrar-productos");
 
    const params = new URLSearchParams(window.location.search);
    const categoria = params.get('categoria');

    if (categoria) {
        mostrarProductos(categoria); // Filtrar productos por la categoría obtenida de la URL
    }

    function mostrarProductos(categoria) {
      fetch("http://localhost:3000/productos")
        .then((response) => response.json())
        .then((data) => {
          const productosFiltrados = data.filter(producto => producto.categoria === categoria);
          const cards = productosFiltrados.map((producto) => {
            const precioFormateado = producto.precio.toLocaleString('es-ES');
            return `
                <div class="card container-card" style="width: 17rem;">
                    <img src="${producto.imagen}" class="card-img-top imagen-product" alt="${producto.nombre}">
                    <div class="card-body card-info-product">
                        <h5 class="card-title title-product">${producto.nombre}</h5>
                        <p class="card-text descrpcion-product">${producto.descripcion}</p>
                        <h5 class="precio-product">$ ${precioFormateado}</h5>
                        <div class="content-boton">
                            <a href="#" class="boton-huellapet">Agregar al carrito</a>
                        </div>    
                    </div>
                </div>
                `;
          }).join("");
          contenedorProductos.innerHTML = cards;
        });
    }
  
    const form = document.getElementById("productoForm");
  
    if (form) {
      form.addEventListener("submit", function(event) {
          event.preventDefault();
          
          const nuevoProducto = {
              nombre: document.getElementById("nombre").value,
              categoria: document.getElementById("categoria").value,
              precio: parseFloat(document.getElementById("precio").value),
              descripcion: document.getElementById("descripcion").value,
              imagen: document.getElementById("imagen").value,
              disponibilidad: document.getElementById("disponibilidad").checked
          };
  
          fetch("http://localhost:3000/productos", {
              method: "POST",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(nuevoProducto)
          })
          .then(response => response.json())
          .then(data => console.log(data));
      });
    }
  });
  