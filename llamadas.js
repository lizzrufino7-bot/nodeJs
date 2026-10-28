

const modulo = require("./calcularIMC.js");

const pesoPrueba = 65;
const alturaPrueba = 1.58;

console.log("IMC versión 1.0");
const Alumna = modulo.calcularIMC(pesoPrueba, alturaPrueba);
console.log(`El IMC es: ${Alumna.toFixed(2)}`);

console.log("\nIMC versión 2.0");
const Alumna2 = modulo.calcularIMCV2(pesoPrueba, alturaPrueba);

if (Alumna2 !== undefined) {
    console.log(`El IMC V2 es: ${Alumna2.toFixed(2)}`);
}

console.log("\nIMC versión 3.0");
modulo.calcularIMCV3(pesoPrueba, alturaPrueba);
