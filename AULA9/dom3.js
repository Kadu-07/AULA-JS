function calcularMedia() {
    let nota1 = Number(document.querySelector('#nota1').value)
    let nota2 = Number(document.querySelector('#nota2').value)
    let texto = document.querySelector('#texto')

    let media = (nota1 + nota2)/2

    texto.innerHTML = `A sua média é: ${media}`
}