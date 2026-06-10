let paragrafo = document.querySelector('p')

function logar() {
    let email = String(document.querySelector('#email').value).toLowerCase()
    let senha = String(document.querySelector('#senha').value).toLowerCase()
    
    if (email == "cadubalbueno2007@gmail.com" && senha == "1234") {
        paragrafo.innerHTML = "Você logou!"
    } else {
        paragrafo.innerHTML = "E-mail ou senha errada, tente novamente!"
    }
}

function registrar() {
    paragrafo.innerHTML = "Função ainda em construção"
}