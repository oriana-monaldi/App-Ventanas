//Elementos del dom para calcular el factorial de un numero ingresado
const inputCalculo = document.getElementById("inputCalculo");
const botonFactorial = document.getElementById("CalculoDelFactorial");
const resultadoFactorial = document.getElementById("resultadoFactorial");

//Elementos del dom para calcular la paridad de un numero ingresado
const inputFactorial = document.getElementById('inputFactorial');
const botonParidad = document.getElementById('comprobarParidad');
const resultadoParidad = document.getElementById('resultadoParidad');

//Funcion para calcular el factorial
function calcularFactorial(num) {
    if (num < 0) return "No se puede calcular el factorial de un numero negativo";
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

botonFactorial.addEventListener("click", () => {
    const numero = parseInt(inputCalculo.value);
    if (!isNaN(numero)) {
        const resultado = calcularFactorial(numero);
        resultadoFactorial.innerHTML = `El factorial de ${numero} es: ${resultado}`;
    } else {
        resultadoFactorial.innerHTML = "Ingrese un numero válido mayor a cero";
    }
});

// Funcion de comprobar la paridad 
function comprobarParidad(num) {
    if (num > 0) {
        return num % 2 === 0 ? "es un número es par" : "es un número es impar";
    } else {
        return "Ingrese un número positivo";
    }
}

botonParidad.addEventListener("click", () => {
    const numero = parseInt(inputFactorial.value);
    if (!isNaN(numero)) {
        const resultado = comprobarParidad(numero);
        resultadoParidad.innerHTML = `El número ${numero} ${resultado}`;
    } else {
        resultadoParidad.innerHTML = "Ingrese un número válido";
    }
});