const operador = document.querySelectorAll('.operador');
const numero = document.querySelectorAll('.numBtn');
const reset = document.getElementById('reset');
const borrar = document.getElementById('borrar');
const valorAnterior = document.getElementById('valor-anterior');
const valorActual = document.getElementById('valor-actual');
const igual = document.getElementById('igual');
const decimal = document.getElementById('decimal');


function sumar(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function restar(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multi(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function dividir(a, b) {
    return parseFloat(a) / parseFloat(b);
}

function operate(a, b, operador) {
    if (operador == '+'){
        return sumar(a, b);
    } else if (operador == ' - ') {
        return restar(a, b);
    }
    else if (operador == 'x') {
        return multi(a, b);
    }
    else if (operador == '÷') {
        if (b == '0') {
            return "ERROR";
        } else {
            return dividir(a, b);
        }
    }
}

let valorInicial = valorActual.textContent;
let valorSiguiente = valorAnterior.textContent;
let operator = '';

numero.forEach(btn => {
    btn.addEventListener('click', (event) => {
        if (valorInicial == '0') {
            valorInicial = '';
            valorInicial += event.target.textContent;
            valorActual.textContent = valorInicial;
        } else {
            valorInicial += event.target.textContent;
            valorActual.textContent = valorInicial;
        }
    })
})

operador.forEach(element => {
    element.addEventListener('click', (e) => {
        if (valorSiguiente != '') {
            valorSiguiente = operate(valorSiguiente, valorInicial, operator);
            valorInicial = '';
            operator = e.target.textContent;
            valorSiguiente = Number.isInteger(valorSiguiente)? valorSiguiente + ' ' + operator : valorSiguiente.toFixed(2) + ' ' + operator;
            valorAnterior.textContent = valorSiguiente;
        } else {
            valorSiguiente = valorInicial + ' ' +e.target.textContent;
            operator = e.target.textContent;
            valorAnterior.textContent = valorSiguiente;
            valorInicial = '';
            valorActual.textContent = valorInicial;
        }
    })
})

igual.addEventListener('click', () => {
    valorAnterior.textContent = valorSiguiente + ' ' + valorInicial + ' =';
    let resultado = operate(valorSiguiente, valorInicial, operator);
    if (Number.isInteger(resultado)) {
        valorActual.textContent = resultado;
    } else {
        valorActual.textContent = resultado.toFixed(2);
    }
})

reset.addEventListener('click', () => {
    valorActual.textContent = '0';
    valorAnterior.textContent = '';
    valorInicial = '';
    valorSiguiente = '';
})

borrar.addEventListener('click', () => {
    valorInicial = valorInicial.slice(0, -1);
    valorActual.textContent = valorInicial;
})

decimal.addEventListener('click', (e) => {
    if (valorActual.textContent.includes('.')) {
        return;
    } else {
        valorInicial += e.target.textContent;
        valorActual.textContent = valorInicial;
    }
})
