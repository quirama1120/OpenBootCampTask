const PeliculaUno = {
    nombre: 'Harry',
    id: 1,
    reproducir() {
        return `Se está reproduciendo la película ${this.nombre}`
    }
}

console.log(PeliculaUno.reproducir())

class Pelicula {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
    reproducir() {
        return `se está reproduciendo ${this.nombre}`
    }
}

class Serie extends Pelicula {
    reproducir() {
        return `se está reproduciendo capítulo ${this.cap} de ${this.nombre}`
    }
    constructor(nombre,id,cap) {
        super(nombre, id);
        this.cap =cap;
    }
}
const peliculaUno = new Pelicula('gladiador', 1);
const peliculaDos = new Pelicula('araña', 2)
const serieUno = new Serie('stranger things', 3,5)

console.log(peliculaUno.reproducir())
console.log(peliculaDos.reproducir())
console.log(serieUno.reproducir())