const contenedorProductos = document.getElementById("mostrar-productos");
 
 
fetch("http://localhost:3000/productos")
  .then((response) => response.json())
  .then((data) => {
    const cards = data.map((producto) => {
      return `
            <div class="card" style="width: 18rem;">
                <img src="${producto.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text">${producto.categoria}</p>
                    <h3>$ ${producto.precio}</h3>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            `;
    }).join("");
    contenedorProductos.innerHTML = cards;
  });
 
// *********************************************************************************
 
const form = document.getElementById("productoForm")
 
form.addEventListener("submit", function(event){
    event.preventDefault()
   
    const nuevoProducto = {
        nombre : document.getElementById("nombre").value,
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
        .then(data => console.log(data))
   
})