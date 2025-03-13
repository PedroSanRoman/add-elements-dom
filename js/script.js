 // Aquí tu código

const agregar = document.getElementById ('agregar');
const lista = document.getElementById ('lista')
const resultado = function () {
    const texto = prompt ('Introduce aquí lo que quieras añadir');
    if (texto) {
        lista.innerHTML += '<li>' + texto + '</li>'
    }
    }

agregar.addEventListener ('click', resultado)