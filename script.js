const operador = document.querySelectorAll('.operador');
const numero = document.querySelectorAll('.numBtn');
const reset = document.getElementById('reset');
const valorAnterior = document.getElementById('valor-anterior');
const valorActual = document.getElementById('valor-actual');
const igual = document.getElementById('igual')

function sumar(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function restar(a, b) {
    return parseFloat(a) - parseFloat(b);;
}

function multi(a, b) {
    return parseFloat(a) * parseFloat(b);;
}

function dividir(a, b) {
    return parseFloat(a) / parseFloat(b);;
}

function operate(a, b, operador) {
    if (operador == '+'){
        return sumar(a, b)
    } else if (operador == ' - ') {
        return restar(a, b)
    }
    else if (operador == 'x') {
        return multi(a, b)
    }
    else if (operador == '÷') {
        return dividir(a, b)
    }
}

let valorInicial = valorActual.textContent;
let valorSiguiente = valorAnterior.textContent;
let operator = '';
numero.forEach(btn => {
    btn.addEventListener('click', (event) => {
        valorInicial += event.target.textContent;
        valorActual.textContent = valorInicial;
    })
})

operador.forEach(element => {
    element.addEventListener('click', (e) => {
        valorSiguiente = valorInicial + ' ' +e.target.textContent;
        operator = e.target.textContent;
        valorAnterior.textContent = valorSiguiente;
        valorInicial = '';
        valorActual.textContent = valorInicial;
    })
})

igual.addEventListener('click', () => {
    valorAnterior.textContent = valorSiguiente + ' ' + valorInicial;
    valorActual.textContent = operate(valorSiguiente, valorInicial, operator);
})

reset.addEventListener('click', () => {
    valorActual.textContent= '';
    valorAnterior.textContent = '';
    valorInicial = '';
    valorSiguiente = '';
})