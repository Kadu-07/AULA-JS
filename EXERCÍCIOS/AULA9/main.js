let paragrafo = document.querySelector('p')
let pagone = document.getElementById('login')
let pagetwo = document.getElementById('novasenha')

function logar() {
    let email = String(document.querySelector('#email').value).toLowerCase()
    let senha = String(document.querySelector('#senha').value).toLowerCase()
    
    if (email == "cadubalbueno2007@gmail.com" && senha == "1234") {
        paragrafo.innerHTML = "Você logou!"
    } else if (email == '' && senha == '') {
        paragrafo.innerHTML = "Preencha os campos"
    } else {
        paragrafo.innerHTML = "E-mail ou senha errada, tente novamente!"
    }
}

function registrar() {
    paragrafo.innerHTML = "Função ainda em construção"
}

function trocarpag() {
    pagone.style.display = "none"
    pagetwo.style.display = 'flex'
}

function voltar() {
    pagone.style.display = 'flex'
    pagetwo.style.display = 'none'
}