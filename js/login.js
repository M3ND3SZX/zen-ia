'use strict'

async function validarLogin() {

    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    if (email === '' || senha === '') {
        alert('Por favor, preencha todos os campos!!')
        return false;
    }
    
    try {
        const users = await fetch('https://back-login.vercel.app/usuarios');
        const listUsers = await users.json();

        listUsers.forEach((user) => {
            if (email === user.email && senha === user.senha) {
              
                window.location.href = '../screens/home.html'

            }
        })

    } catch (error) {
        alert('Erro ao acessar a API !')
        console.error(error);
    }

}

const button = document.getElementById('logar')

button.addEventListener('click', validarLogin)