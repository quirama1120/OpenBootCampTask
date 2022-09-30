class Persona {
    constructor (edad,nombre,telefono){
        this.edad = edad;
        this.nombre = nombre;
        this.telefono = telefono;
}}

class Cliente extends Persona{
    
constructor(edad, nombre, telefono,credito) {
    super(edad,nombre,telefono)
    this.credito = credito;
}
}
class Trabajador extends Persona {
    constructor(edad,nombre,telefono,salario){
        super(edad,nombre,telefono)
        this.salario =salario;
    }
}
const clienteUno = new Cliente(12,"henry",3128793745,200000)
const trabajadorRobert = new Trabajador(25,"Robert",3128877483,1200000)
console.log(clienteUno) 
console.log(trabajadorRobert)