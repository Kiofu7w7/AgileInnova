peliculas = [];

for (let i = 1; i <= 10; i++) {
    nombre = prompt(`Ingrese el nombre de la película ${i}:`);
    imagenURL = prompt(`Ingrese la URL de la imagen de la película ${i}:`);
    pelicula = { nombre, imagenURL };
    peliculas.push(pelicula);
}

contenedorPeliculas = document.getElementById('contenedor');

for (let i = 0; i < peliculas.length; i++) {
    pelicula = peliculas[i];
    peliculaDiv = document.createElement('div');
    imagen = document.createElement('img');
    imagen.src = pelicula.imagenURL;
    imagen.alt = `imagen${i + 1}`;
    imagen.style.width = '200px';
    nombrePelicula = document.createElement('p');
    nombrePelicula.textContent = pelicula.nombre;
    peliculaDiv.appendChild(imagen);
    peliculaDiv.appendChild(nombrePelicula);
    contenedorPeliculas.appendChild(peliculaDiv);
}

