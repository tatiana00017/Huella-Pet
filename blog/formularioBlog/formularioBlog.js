/* **************** Filtrado del formulario segun la seleccion  ******************/
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('tipoPublicacion').addEventListener('change', function() {
        const seleccion = this.value;
        const formulario = document.getElementById('form-blog');

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
});








