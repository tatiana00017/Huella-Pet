/* **************** Filtrado del formulario html según la selección ******************/
document.addEventListener("DOMContentLoaded", function() {
    const tipoPublicacion = document.getElementById('tipoPublicacion');
    const formulario = document.getElementById('form-blog');

    if (tipoPublicacion) {
        tipoPublicacion.addEventListener('change', function() {
            const seleccion = this.value;
            formulario.innerHTML = '';

            if (seleccion === 'Educación') {
                formulario.innerHTML = `
                    <label for="titulo">Título:*</label>
                    <input class="input-blog educacion-section" type="text" id="tituloEducacion" name="titulo" placeholder="Título de la publicación" required>
                    <br>
                    <label for="enfoque">Enfoque:*</label>
                    <select id="enfoqueEducacion" name="enfoque" required>
                        <option value="perro">Perro</option>
                        <option value="gato">Gato</option>
                        <option value="ambos">Perro y Gato</option>
                    </select>
                    <label for="descripcionEducacion">Descripción:*</label>
                    <textarea id="descripcionEducacion" class="educacion-section" name="descripcionEducacion" rows="3" placeholder="Descripción" required></textarea>
                    <br>
                    <label for="imagenEducacion">Link de Imagen:*</label>
                    <input class="input-blog educacion-section" type="text" id="imagenEducacion" name="imagenEducacion" placeholder="URL de la imagen" required>
                `;
            } else if (seleccion === 'Eventos/Donaciones') {
                formulario.innerHTML = `
                    <label for="nombreEvento">Nombre del Evento:*</label>
                    <input class="input-blog" type="text" id="nombreEvento" name="nombreEvento" placeholder="Nombre del evento" required>
                    <br>
                    <label for="imagenEvento">Link de Imagen:*</label>
                    <input class="input-blog" type="text" id="imagenEvento" name="imagenEvento" placeholder="URL de la imagen" required>
                    <br>
                    <label for="fechaEvento">Fecha:*</label>
                    <input class="input-blog" type="date" id="fechaEvento" name="fechaEvento" required>
                    <br>
                    <label for="horaEvento">Hora:*</label>
                    <input class="input-blog" type="time" id="horaEvento" name="horaEvento" required>
                    <br>
                    <label for="ciudad">Ciudad:*</label>
                    <select id="ciudadEvento" name="ciudad" required>
                        <option value="bogota">Bogotá DC</option>
                        <option value="cali">Cali</option>
                    </select>
                    <br>
                    <label for="direccion">Lugar:*</label>
                    <input class="input-blog" type="text" id="direccionEvento" name="direccion" placeholder="Dirección" required>
                    <br>
                    <label for="descripcionEvento">Descripción:*</label>
                    <textarea id="descripcionEvento" name="descripcionEvento" rows="3" placeholder="Descripción" required></textarea>
                `;
            } else if (seleccion === 'Adopciones') {
                formulario.innerHTML = `
                    <label for="imagenAdopcion1">Link de Imagen 1:*</label>
                    <input class="input-blog" type="text" id="imagenAdopcion1" name="imagenAdopcion1" placeholder="URL de la imagen" required>
                    <br>
                    <label for="imagenAdopcion2">Link de Imagen 2:*</label>
                    <input class="input-blog" type="text" id="imagenAdopcion2" name="imagenAdopcion2" placeholder="URL de la imagen" required>
                    <br>
                    <label for="imagenAdopcion3">Link de Imagen 3:*</label>
                    <input class="input-blog" type="text" id="imagenAdopcion3" name="imagenAdopcion3" placeholder="URL de la imagen" required>
                    <br>
                    <label for="nombre">Nombre:*</label>
                    <input class="input-blog" type="text" id="nombre" name="nombre" placeholder="Nombre del Animal" required>
                    <br>
                    <label for="especie">Especie:*</label>
                    <select id="especie" name="especie" required>
                        <option value="Canino">Canino</option>
                        <option value="Felino">Felino</option>
                    </select>
                    <br>
                    <label for="generoMascota">Género:*</label>
                    <select id="generoMascota" name="generoMascota" required>
                        <option value="Macho">Macho</option>
                        <option value="Hembra">Hembra</option>
                    </select>
                    <br>
                    <label for="edad">Edad:*</label>
                    <input class="input-blog" type="number" id="edad" name="edad" placeholder="Edad de la mascota" required>
                    <br>
                    <label for="raza">Raza:*</label>
                    <input class="input-blog" type="text" id="raza" name="raza" placeholder="Raza de la mascota" required>
                    <br>
                    <label for="condiciones">Condiciones Médicas:*</label>
                    <input class="input-blog" type="text" id="condiciones" name="condiciones" placeholder="Condiciones médicas de la mascota" required>
                    <br>
                    <label for="descripcionAdopcion">Descripción:*</label>
                    <textarea id="descripcionAdopcion" name="descripcionAdopcion" rows="3" placeholder="Descripción" required></textarea>
                `;
            }
        });
    }

    // Formulario de envío
    const formularioBlog = document.getElementById('formulario-blog');
    if (formularioBlog) {
        formularioBlog.addEventListener('submit', function(event) {
            console.log('Formulario enviado');
            event.preventDefault();

            const seleccion = tipoPublicacion.value.toLowerCase();
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
                const fechaFormateada = fechaObj.toLocaleString('en-US', opciones).replace(',', '');

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
                    crearTarjetaAdopciones(data);
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Error al enviar la publicación.');
                });
            }
        });
    } else {
        console.error('El formulario no se encontró.');
    }
});

// Funciones para crear tarjetas (ejemplo)
function crearTarjetaEducacion(data) {
    const contenedor = document.getElementById('contenedor-educacion');
    if (contenedor) {
        contenedor.insertAdjacentHTML('beforeend', `<div>${data.titulo}</div>`); 
        console.error('El contenedor de educación no se encontró.');
    }
}

function crearTarjetaEventos(data) {
    const contenedor = document.getElementById('contenedor-eventos');
    if (contenedor) {
        contenedor.insertAdjacentHTML('beforeend', `<div>${data.nombre}</div>`); 
        console.error('El contenedor de eventos no se encontró.');
    }
}

function crearTarjetaAdopciones(data) {
    const contenedor = document.getElementById('contenedor-adopciones');
    if (contenedor) {
        contenedor.insertAdjacentHTML('beforeend', `<div>${data.nombre}</div>`); 
    } else {
        console.error('El contenedor de adopciones no se encontró.');
    }
}





