//EJ 01
/*
const { concatenarStrings, interpolarStrings } = require('./EJ01');

const string1 = "Hola";
const string2 = "Mundo";

console.log("Concatenación:", concatenarStrings(string1, string2));

console.log("Interpolación:", interpolarStrings(string1, string2));
*/

//EJ 02 - MATEMATICA

/*
const {pi, areaCirculo, perimetroCirculo, sumarUnoAPi, dobleDePi} = require('./matematica.js')

const radio = 5

console.log("el area del circulo cuyo radio es ", radio, "es:", areaCirculo(radio));

console.log("el perimetro cuyo radio es ", radio, "es: ", perimetroCirculo(radio));

console.log("pi + 1 = ", sumarUnoAPi());

console.log("el doble aproximado de pi es: ", dobleDePi());
*/

//EJ 03

/*const Alumno = require('./alumno.js');

const alumno1 = new Alumno("Vera Romanowicz", "48464069");
const alumno2 = new Alumno("Maia Rasumoff", "48387900");

console.log(alumno1.mostrarInfo());
console.log(alumno2.mostrarInfo());


const fs = require('fs'); //requiero el modulo interno 'fs'

  const copiarArchivo = (dirArchivo1, dirArchivo2) =>  {

  //Leer el archivo

  const textoDelArchivo = fs.readFileSync(dirArchivo1);
  
  //esribir el nuevo archivo

  fs.writeFileSync(dirArchivo2, textoDelArchivo);

  }

copiarArchivo('./archivo.txt', './archivo2.txt');


const url = require('url'); //requiero modulo interno 'url'

const parsearUrl = (link) => {

  const parseado= tryParseUrl(link);
    const linkParseado= url.parse(link);
    const objUrl = {
        
        "host": linkParseado.host,
        "pathname": linkParseado.pathname,
        "parametros": linkParseado.search
    }

    return objUrl;
}

//console.log(parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"));

//ejercicio 6

try {
  parsearUrl("a");
} catch (error) {
  console.log("Error: "+ error);
}
*/

//ejercicio 7

const countryToCurrency = require('country-to-currency');

const obtenerMoneda = (moneda) => {return countryToCurrency[ moneda ];}

let moneda= obtenerMoneda("BR");
console.log("Moneda de Brasil: " + moneda);
