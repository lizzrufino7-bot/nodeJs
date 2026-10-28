
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Versión 2.0: validación de datos
function calcularIMCV2(peso, altura) {
    if (peso === undefined || altura === undefined) {
        console.log("Error: el peso y la altura son obligatorios");
        return undefined;
    }

    if (typeof peso !== "number" || typeof altura !== "number") {
        console.log("Error: el peso y la altura deben ser numéricos");
        return undefined;
    }

    if (!Number.isFinite(peso) || !Number.isFinite(altura) ||
        peso <= 0 || altura <= 0) {
        console.log("Error: el peso y la altura deben ser valores válidos mayores que cero");
        return undefined;
    }

    return peso / (altura * altura);
}

// Versión 3.0: cálculo, validación y clasificación
function calcularIMCV3(peso, altura) {
    const imc = calcularIMCV2(peso, altura);

    if (imc === undefined) {
        return undefined;
    }

    console.log(`El IMC V3 es: ${imc.toFixed(2)}`);
    clasificadorIMC(imc);

    return imc;
}

// Clasificar el IMC
function clasificadorIMC(imc) {
    let clasificacion = "";

    switch (true) {
        case imc < 18.5:
            clasificacion = "Bajo peso";
            break;

        case imc < 25:
            clasificacion = "Peso normal";
            break;

        case imc < 30:
            clasificacion = "Sobrepeso";
            break;

        default:
            clasificacion = "Obesidad";
            break;
    }

    console.log(`Clasificación: ${clasificacion}`);
    return clasificacion;
}

// Exportar las funciones para utilizarlas en otros archivos
module.exports = {
    calcularIMC,
    calcularIMCV2,
    calcularIMCV3,
    clasificadorIMC
};
