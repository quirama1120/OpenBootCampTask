class Persona {
    constructor (edad,nombre,telefono) {
        this._edad = edad;
        this._nombre = nombre;
        this._telefono = telefono;
    }
get edad () {
return this._edad;
}
get nombre () {
    return this._nombre;
}
get telefono () {
    return this._telefono;
}
set edad (age) {
this._edad = age;
}
set nombre (name) {
this._nombre = name;
}
set telefono (phone) {
this._telefono = phone;
}
}
const quirama = new Persona(27,"Christian", 3008871403)
console.log(quirama)