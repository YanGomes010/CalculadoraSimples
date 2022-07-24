var numero1 = document.querySelector("#number");
var numero2 = document.querySelector("#number1");
let resultado = document.querySelector("#resultado");
let somar = document.querySelector("#somar");
let subtrair = document.querySelector("#subtrair");
let dividir = document.querySelector("#dividir");
let multiplicar = document.querySelector("#multiplicar");

function somarE(n1, n2) {
    if (numero1.value == 0 || numero2.value == 0) {
        alert("Insira um número")
    } else {
        n1 = Number(numero1.value);
        n2 = Number(numero2.value);
        valor = n1 + n2;
        resultado.innerHTML = `Resultado da soma é ${n1} + ${n2} = ${valor}`
    }
}

function subtrairE(n1, n2) {
    if (numero1.value == 0 || numero2.value == 0) {
        alert("Insira um número")
    } else {
        n1 = Number(numero1.value);
        n2 = Number(numero2.value);
        valor = n1 - n2;
        resultado.innerHTML = `Resultado da subtração é ${n1} - ${n2} = ${valor}`
    }
}

function dividirE(n1, n2) {
    if (numero1.value == 0 || numero2.value == 0) {
        alert("Insira um número")
    } else {
        n1 = Number(numero1.value);
        n2 = Number(numero2.value);
        valor = n1 / n2;
        resultado.innerHTML = `Resultado da divisão é ${n1} / ${n2} = ${valor.toFixed(2)}`
    }
}

function multiplicarE(n1, n2) {
    if (numero1.value == 0 || numero2.value == 0) {
        alert("Insira um número")
    } else {
        n1 = Number(numero1.value);
        n2 = Number(numero2.value);
        valor = n1 * n2;
        resultado.innerHTML = `Resultado da multiplicação de ${n1} x ${n2} = ${valor}`
    }
}