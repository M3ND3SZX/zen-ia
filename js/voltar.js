'use strict'

async function  voltar() {

    window.location.href = '../screens/login.html'
    return true

}

const click = document.getElementById('voltar')

click.addEventListener('click', voltar)