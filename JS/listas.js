const imprimirPrimeraPosicion = (arreglo) => {
    console.log(arreglo[0]);
};

imprimirPrimeraPosicion(['Anita','lava','la', 'tina']);


const imprimirTodasLasPosiciones = (arr) => {
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i]);
        i++;
    }
};

imprimirTodasLasPosiciones(['Anita','lava','la', 'tina']);

const imprimirObjetoUnoPorUno = (obj) => {
    const arr = Object.values(obj);
    let i=0;
    while (i < arr.length) {
        console.log(arr[i])
    }
}
const getData = (numberOfPlayers) => {
    switch(numberOfPlayers) {
        case 0: console.log("El número mínomo de jugadores es 1");
        break;
    }
}

let datosAdan = {
    nombre: 'Adan',
    edad: 36,
    ciudad: 'Puebla',
}