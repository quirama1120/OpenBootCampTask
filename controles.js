let number = number;
if (number > 0) {
console.log("es un número positivo")
} else if (number < 0){
console.log("eres un número negativo")
} else {
    console.log("eres igual a 0")
}

while (number < 3) {
number++
console.log(number)
}

do {
    number = number + 1;
} while (number < 3) {
    number++
    console.log(number)
    }

    for (i = 0; i<=3; i++) {
        console.log(i)
    }
let estacion = "";
    switch (estacion) {
        case estacion === "invierno":
        console.log(`estamos en ${estacion}`)
        break;
        case estacion === "verano":
        console.log(`estamos en ${estacion}`)
        break;
        case estacion === "primavera":
        console.log(`estamos en ${estacion}`)
        break;
        case estacion === "otoño":
        console.log(`estamos en ${estacion}`)
        break;
        default:
            console.log("vives en la ciudad de la eterna primavera y no tienes estaciones")
    }
