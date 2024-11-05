document.addEventListener("DOMContentLoaded", function() {
    const contenidoDiv = document.getElementById('contenido'); 
    

    // Contador para ID únicos en el carrusel 
    let adopcionCounter = 0;

    // scroll 
    window.onscroll = function() {
        var button = document.getElementById("back-to-top");
        if (document.body.scrollTop > 980 || document.documentElement.scrollTop > 980) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }
    };

    // Cargar datos al iniciar la página
    function cargarDatos() {

        fetch('http://localhost:3001/educacion')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => crearTarjetaEducacion(item));
            })
            .catch(error => console.error('Error al cargar datos de educación:', error));

        fetch('http://localhost:3001/eventos')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => crearTarjetaEventos(item));
            })
            .catch(error => console.error('Error al cargar datos de eventos:', error));

        fetch('http://localhost:3001/adopciones')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => crearTarjetaAdopciones(item)); 
            })
            .catch(error => console.error('Error al cargar datos de adopciones:', error));
    }

    cargarDatos();

    // Cargar sección desde blogOculto
    function cargarSeccion(seccion) {
        const seccionVisible = contenidoDiv.querySelector(seccion);

        if (seccionVisible) {
            contenidoDiv.innerHTML = ''; 
        } else {
            fetch('blogOculto.html') 
                .then(response => response.text())
                .then(data => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(data, 'text/html');
                    const seccionContent = doc.querySelector(seccion);
                    if (seccionContent) {
                        contenidoDiv.innerHTML = ''; 
                        contenidoDiv.appendChild(seccionContent.cloneNode(true)); 
                        cargarDatos(); 
                         inicializarModalFormAdopcion(); 
                        inicializarModalRequisitos(); 
                    }
                })
                .catch(error => console.error('Error al cargar la sección:', error));
        }
    }


    // Agregar eventos a los botones
    document.querySelector('.btn-blog-adopciones').addEventListener('click', (e) => {
        e.preventDefault();
        cargarSeccion('.contenedor-adopciones');
    });
    
    document.querySelector('.btn-blog-eventos').addEventListener('click', (e) => {
        e.preventDefault();
        cargarSeccion('.contenedor-eventos');
    });
    
    document.querySelector('.btn-blog-educacion').addEventListener('click', (e) => {
        e.preventDefault();
        cargarSeccion('.contenedor-educacion');
    });

    // Crear tarjetas educacion
    function crearTarjetaEducacion(data) {
        const cardHTML = `
            <div class="card-educacion"> 
                <div class="row g-0 card-elementos-educacion">
                    <div class="col-md-4">
                    <img src="${data.imagen}" class="img-fluid rounded-start img-educacion" alt="imagen educacion">
                    </div>
                    <div class="col-md-8 container-informacion-educacion">
                        <h5 class="card-title titulo-educacion">${data.titulo}</h5>
                        <div class="card-body body-informacion-educacion">
                            <p class="card-text descripcion-educacion">${data.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>    
        `;

        const contenedorTarjetas = document.querySelector('#contenedor-educacion .tarjetas-educacion');
        contenedorTarjetas.insertAdjacentHTML('beforeend', cardHTML);
    }

    // Crear tarjetas de eventos
    function crearTarjetaEventos(data) {
        const cardHTML = `
            <div class="card-eventos"> 
                <div class="card mb-3 card-elementos-eventos">
                    <img src="${data.imagen}" class="card-img-top img-evento" alt="imagen evento">
                    <div class="card-body body-informacion-evento">
                        <div class="row g-0 datos-evento">
                            <h5 class="card-title titulo-evento">${data.nombre}</h5>
                            <p class="card-text fecha-evento no-margin">El día ${data.fecha}<br>${data.ciudad}, ${data.direccion}.</p>
                        </div>
                        <p class="card-text descripcion-evento">${data.descripcion}</p>
                    </div>
                </div>
            </div>
        `;
      const contenedorTarjetas = document.querySelector('#contenedor-eventos .tarjetas-eventos');
      contenedorTarjetas.insertAdjacentHTML('beforeend', cardHTML);
    }

    // Crear tarjetas de adopción
    function crearTarjetaAdopciones(data) {
        adopcionCounter++;
        const uniqueId = `carousel-${adopcionCounter}`; 
    
        const cardHTML = `
            <div class="card-adopcion"> 
            <div class="row g-0 card-elementos-adopcion">
                <div class="col-md-5 contenedor-carrusel-adopcion">
                    <div id="${uniqueId}" class="carousel slide contenedor-slide" data-bs-touch="false">
                        <div class="carousel-inner card-carrusel-adopcion">
                            <div class="carousel-item active carrusel-adopcion">
                                <img src="${data.imagen1}" class="d-block w-100 pp" alt="imagen adopcion">
                            </div>
                            <div class="carousel-item carrusel-adopcion">
                                <img src="${data.imagen2}" class="d-block w-100" alt="imagen adopcion">
                            </div>
                            <div class="carousel-item carrusel-adopcion">
                                <img src="${data.imagen3}" class="d-block w-100" alt="imagen adopcion">
                            </div>
                        </div>
                        <button class="carousel-control-prev chevron-icon" type="button" data-bs-target="#${uniqueId}" data-bs-slide="prev">
                            <i class="fa-solid fa-chevron-left fa-xl chevron" style="color: #2F6A74;" aria-hidden="true"></i>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next chevron-icon" type="button" data-bs-target="#${uniqueId}" data-bs-slide="next">
                            <i class="fa-solid fa-chevron-right fa-xl" style="color: #2F6A74;" aria-hidden="true"></i>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-md-7 contenedor-descripcion-adopcion">
                    <h5 class="card-title nombre-animal">${data.nombre}</h5>
                    <div class="card-body body-adopcion-descripcion">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="contenedor-datos-adopcion">
                                    <p class="card-text info-animal">Especie: ${data.especie}</p>
                                    <p class="card-text info-animal">Sexo: ${data.genero}</p>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="contenedor-datos-adopcion" id="datos-adopcion">
                                    <p class="card-text info-animal">Edad: ${data.edad}</p>
                                    <p class="card-text info-animal">Raza: ${data.raza}</p>
                                </div>
                            </div>
                        </div>
                        <p class="card-text condiciones-animal">Condiciones Médicas: ${data.condiciones}</p>
                        <p class="card-text descripcion-animal">${data.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        const contenedorTarjetas = document.querySelector('#contenedor-adopciones .tarjetas-adopciones');
        contenedorTarjetas.insertAdjacentHTML('beforeend', cardHTML);
    }
});    

