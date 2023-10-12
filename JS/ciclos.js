for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

for (let j = 10; j >= 2; j--) {
    console.log("El valor de i es: " + j);
}

let j = 10;
while(j>=2) {
    console.log("El valor de i es: " + j);
    j--;
}

let respuesta
while (respuesta != 4 ) {
    let pregunta = prompt('Cuánto es 2 +2?');
    respuesta = pregunta;
}