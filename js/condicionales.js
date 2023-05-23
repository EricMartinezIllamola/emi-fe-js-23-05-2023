let A = 10;
let B = 7;

if (A > B) {
    console.log("A es mayor");
}

if (A < B) {
    console.log("B es mayor");
}

if (A == B) {
    console.log("A es igual que B");
}

if (A > B) {
    console.log("A es mayor");
} else if (A < B) {
    console.log("B es mayor")
} else {
    console.log("A es igual que B")
}

// set de datos acotados

let dia = 1;

switch (dia) {
    case 1: 
        console.log("lunes");
        break;
    case 2: 
        console.log("martes");
        break;
    case 3: 
        console.log("miercoles");
        break;
    case 4: 
        console.log("jueves");
        break;
    case 5: 
        console.log("viernes");
        break;
    case 6: 
        console.log("sabado");
        break;
    case 7: 
        console.log("domingo");
        break;
    default:
        console.log("error, valor no valido")
        break;
}