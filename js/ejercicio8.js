let A = prompt("introduzca un numero")
let B = prompt("introduzca otro numero")
let C = prompt("finalmente, introduzca otro numero")

if ((A > B) && (A > C)) {
    console.log("El mayor es:" + A);
}

if ((B > A) && (B > C)) {
    console.log("El mayor es:" + B);
}

if ((C > A) && (C > B)) {
    console.log("El mayor es:" + C);
}