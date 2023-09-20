const operador = document.querySelectorAll('.operador');
const numero = document.querySelectorAll('.numBtn');
const reset = document.getElementById('reset');
const valorAnterior = document.getElementById('valor-anterior');
const valorActual = document.getElementById('valor-actual');

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function operate(valorInicial, operator) {
    
}

let valorInicial = valorActual.textContent;
numero.forEach(btn => {
    btn.addEventListener('click', (event) => {
        valorInicial += event.target.textContent;
    })
})

operador.forEach(operator => {
    operator.addEventListener('click', (e) => {
        if (e.target) {
            console.log(`${valorInicial} + ${e.target}`) 
        }
    })
})

