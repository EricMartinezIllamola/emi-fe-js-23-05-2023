let A = prompt("Introduzca un numero");

let num1 = parseInt(A);

RESTO = num1 % 3 

if (RESTO == 0) {
    console.log("El numero es multiple de 3")
} else {
    console.log("El numero no es multiple de 3")
}