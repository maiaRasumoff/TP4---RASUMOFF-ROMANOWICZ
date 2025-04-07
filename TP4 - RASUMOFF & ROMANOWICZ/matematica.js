const pi = 3.1416

const dos = 2

//funcion 1 

let areaCirculo = (radio) => {
    return pi * radio * radio;
}

//funcion 2

let perimetroCirculo = (radio) => {
    return dos * pi * radio;
}


let sumarUnoAPi = () => {
    return 1 + pi;
}

let dobleDePi = () => {
    return dos * pi;
}


module.exports = {
    areaCirculo,
    perimetroCirculo,
    sumarUnoAPi,
    dobleDePi
};