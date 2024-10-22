document.addEventListener("DOMContentLoaded", function() {
    const contenedorEducacion = document.getElementById("contenedor-educacion");
    const contenedorEventos = document.getElementById("contenedor-eventos");
    const contenedorAdopciones = document.getElementById("contenedor-adopciones");

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

    // Llamar a cargarDatos
    cargarDatos();

    // Manejar el clic en los botones
    const botones = document.querySelectorAll('.btn-blog-opciones');

    botones.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento por defecto del enlace

        // Obtener el contenedor correspondiente
        const target = event.currentTarget.getAttribute('data-target');
        const contenedorTarget = document.getElementById(target);

        // Comprobar si el contenedor ya está visible
        const isVisible = !contenedorTarget.classList.contains('hidden');

        // Ocultar todos los contenedores
        contenedorEducacion.classList.add('hidden');
        contenedorEventos.classList.add('hidden');
        contenedorAdopciones.classList.add('hidden');

        // Si el contenedor estaba visible, lo escondemos
        if (isVisible) {
            contenedorTarget.classList.add('hidden');

        } else {
            // Mostrar el contenedor correspondiente
            contenedorTarget.classList.remove('hidden');
        }
        });
    });

    // Formulario de envío
    document.getElementById('formulario-blog').addEventListener('submit', function(event) {
        console.log('Formulario enviado'); // Para verificar que se llama el evento
        event.preventDefault();

        const seleccion = document.getElementById('tipoPublicacion').value.toLowerCase();
        let data = {};

        if (seleccion === 'educación') {
            data = {
                titulo: document.getElementById('titulo').value,
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
                crearTarjetaEducacion(data); // Crear tarjeta para educación
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al enviar la publicación.');
            });
        } else if (seleccion === 'eventos/donaciones') {
            const fecha = document.getElementById('fechaEvento').value; // Obtiene la fecha
            const hora = document.getElementById('horaEvento').value;

            const fechaHora = `${fecha}T${hora}`;

            const fechaObj = new Date(fechaHora);

                // Formatea la fecha y hora en el formato "YYYY-MM-DD HH:mm am/pm"
            const opciones = { year: 'numeric', month: '2-digit', day: '2-digit', hour: 'numeric', minute: 'numeric', hour12: true };
            const fechaFormateada = fechaObj.toLocaleString('en-US', opciones).replace(',', ''); // Reemplaza la coma

            data = {
                nombre: document.getElementById('nombreEvento').value,
                imagen: document.getElementById('imagenEvento').value,
                fecha: fechaFormateada,
                hora: document.getElementById('fechaEvento').value,
                lugar: document.getElementById('lugarEvento').value,
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
                crearTarjetaEventos(data); // Crear tarjeta para eventos
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al enviar la publicación.');
            });
        } else if (seleccion === 'adopciones') {
            data = {
                nombre: document.getElementById('nombre').value,
                imagen1: document.getElementById('imagenAdopcion1').value,
                imagen2: document.getElementById('imagenAdopcion2').value,
                imagen3: document.getElementById('imagenAdopcion3').value,
                especie: document.getElementById('especie').value,
                raza: document.getElementById('raza').value,
                edad: parseFloat(document.getElementById('edad').value),
                genero: document.getElementById('generoMascota').value,
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

    // Crear tarjetas
    function crearTarjetaEducacion(data) {
        const cardHTML = `
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${data.imagen}" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${data.titulo}</h5>
                    <p class="card-text">${data.descripcion}</p>
                </div>
                </div>
            </div>
            </div>
        `;
        contenedorEducacion.insertAdjacentHTML('beforeend', cardHTML);
    }

    function crearTarjetaEventos(data) {
        const cardHTML = `
            <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src="${data.imagen}" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${data.nombre}</h5>
                    <p class="card-text">El día ${data.fecha} en ${data.lugar}.</p>
                    <p class="card-text">${data.descripcion}</p>
                </div>
                </div>
            </div>
            </div>
        `;
        contenedorEventos.insertAdjacentHTML('beforeend', cardHTML);
    }

    function crearTarjetaAdopciones(data) {
        const cardHTML = `
        <div class="card-adopcion"> 
            <div class="row g-0 card-elementos-adopcion">
                <div class="col-md-5">
                    <div id="carouselExampleControlsNoTouching" class="carousel slide prue" data-bs-touch="false">
                    <div class="carousel-inner card-carrusel-adopcion">
                        <div class="carousel-item active carrusel-adopcion">
                        <img src="${data.imagen1}" class="d-block w-100 pp" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="${data.imagen2}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                        <img src="${data.imagen3}" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev chevron-icon" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                        <i class="fa-solid fa-chevron-left fa-lg chevron" style="color: #1e3050;" aria-hidden="true"></i>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next chevron-icon" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                        <i class="fa-solid fa-chevron-right fa-lg" style="color: #1e3050;" aria-hidden="true"></i>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <h5 class="card-title nombre-animal">${data.nombre}</h5>
                        <p class="card-text caracteristicas-animal">${data.especie}, ${data.raza}, ${data.genero} de ${data.edad} años.</p>
                        <p class="card-text descripcion-animal">${data.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        contenedorAdopciones.insertAdjacentHTML('beforeend', cardHTML);
    }
});
