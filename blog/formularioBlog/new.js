document.addEventListener("DOMContentLoaded", function() {
    const contenedorEducacion = document.getElementById("contenedor-educacion");
    const contenedorEventos = document.getElementById("contenedor-eventos");
    const contenedorAdopciones = document.getElementById("contenedor-adopciones");
    

    //**** Caledario Eventos */

    
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
                data.forEach(item => crearTarjetaAdopciones(item)); // Aquí hay que cambiar
            })
            .catch(error => console.error('Error al cargar datos de adopciones:', error));
    }

    cargarDatos();

    // Cargar los datos de cada seccion al precionar cada boton

    const botones = document.querySelectorAll('.btn-blog-opciones');

    botones.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); 

            const target = event.currentTarget.getAttribute('data-target');
            const contenedorTarget = document.getElementById(target);

            const isVisible = !contenedorTarget.classList.contains('hidden');

            contenedorEducacion.classList.add('hidden');
            contenedorEventos.classList.add('hidden');
            contenedorAdopciones.classList.add('hidden');

            if (isVisible) {
                contenedorTarget.classList.add('hidden');
            } else {
                contenedorTarget.classList.remove('hidden');
            }
        });
    });

    // Formulario de envío
    document.getElementById('formulario-blog').addEventListener('submit', function(event) {
        console.log('Formulario enviado'); 
        event.preventDefault();

        const seleccion = document.getElementById('tipoPublicacion').value.toLowerCase();
        let data = {};

        if (seleccion === 'educación') {
            data = {
                titulo: document.getElementById('tituloEducacion').value,
                enfoque: document.getElementById('enfoqueEducacion').value,
                imagen: document.getElementById('imagenEducacion').value,
                descripcion: document.getElementById('descripcionEducacion').value
            };

            fetch(`http://localhost:3001/educacion`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Éxito:', data);
                alert('Publicación de Educación enviada exitosamente.');
                crearTarjetaEducacion(data);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al enviar la publicación.');
            });


        } else if (seleccion === 'eventos/donaciones') {
            const fecha = document.getElementById('fechaEvento').value; 
            const hora = document.getElementById('horaEvento').value;

            const fechaHora = `${fecha}T${hora}`;
            const fechaObj = new Date(fechaHora);
            const opciones = { year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: 'numeric', hour12: true };
            const fechaFormateada = fechaObj.toLocaleString('en-US', opciones).replace(',', ''); // Reemplaza la coma

            data = {
                nombre: document.getElementById('nombreEvento').value,
                imagen: document.getElementById('imagenEvento').value,
                fecha: fechaFormateada,
                hora: document.getElementById('fechaEvento').value,
                ciudad: document.getElementById('ciudadEvento').value,
                direccion: document.getElementById('direccionEvento').value,
                descripcion: document.getElementById('descripcionEvento').value
            };

            fetch(`http://localhost:3001/eventos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Éxito:', data);
                alert('Publicación de Evento enviada exitosamente.');
                crearTarjetaEventos(data); 
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al enviar la publicación.');
            });


        } else if (seleccion === 'adopciones') {
            data = {
                
                imagen1: document.getElementById('imagenAdopcion1').value,
                imagen2: document.getElementById('imagenAdopcion2').value,
                imagen3: document.getElementById('imagenAdopcion3').value,
                nombre: document.getElementById('nombre').value,
                especie: document.getElementById('especie').value,
                genero: document.getElementById('generoMascota').value,
                edad: parseFloat(document.getElementById('edad').value),
                raza: document.getElementById('raza').value,
                condiciones: document.getElementById('condiciones').value,
                descripcion: document.getElementById('descripcionAdopcion').value
            };

            fetch(`http://localhost:3001/adopciones`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Éxito:', data);
                alert('Publicación de Adopción enviada exitosamente.');
                crearTarjetaAdopciones(data); // Crear tarjeta para adopciones
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al enviar la publicación.');
            });
        }
    });

    // filtrado Tarjetas 

    
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
    //contenedorEducacion.insertAdjacentHTML('beforeend', cardHTML);

       /// ****filtrado tarjetas educacion



    // **** Calendario eventos ****************

  

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
        // contenedorAdopciones.insertAdjacentHTML('beforeend', cardHTML);
        const contenedorTarjetas = document.querySelector('#contenedor-adopciones .tarjetas-adopciones');
        contenedorTarjetas.insertAdjacentHTML('beforeend', cardHTML);
    }
});    

