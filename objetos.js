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


// construir carros como objeto y como clase

const carro = {
puertas: 5,
velocidadMaxima: 120,
acelerar() {
`el carro está acelerando`
}
}

class Carro {
    constructor(puertas, velocidadMaxima, marca) {
        this.puertas = puertas;
        this.velocidadMaxima = velocidadMaxima;
        this.marca = marca;
    }
    acelerar() {
        return `el carro ${this.marca} alcanzó ${this.velocidadMaxima}`
    }
}

class Moto extends Carro {
constructor(puertas,velocidadMaxima,marca,casco) {
super(puertas,velocidadMaxima,marca,casco)
    this.casco = casco;
}
acelerar() {
    return `la ${this.marca} acelera hasta alcanzar ${this.velocidadMaxima}`
}
precaucion() {
    if(this.casco === 0) {
        return `Mk ojo tienes ${this.casco} cascos`
    } else {
       return this.acelerar()
    }
}
}
const carroUno = new Carro(4, 210,"ferrari")
const carroDos = new Carro(2,180,"mazda")
const motoUno = new Moto(0,170,"toyota",2)
const motoDos = new Moto(0,180,"kawasaky",2)
console.group();
console.log(carroUno)
console.log(carroDos)
console.log(motoUno)
console.log(motoDos)
console.groupEnd()

console.log(carroUno.acelerar())
console.log(carroDos.acelerar())
console.log(motoUno.acelerar())
console.log(motoDos.precaucion())