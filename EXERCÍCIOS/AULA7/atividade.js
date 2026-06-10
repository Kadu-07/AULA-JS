// Programa pra IMC

function calculo_imc(altura, peso) {
    let res = (peso / (altura**2)).toFixed(2)
    return res
}

let peso = parseFloat(prompt("Qual o seu peso?(em quilogramas)"))
let altura = parseFloat(prompt("Qual a sua altura?(em metros)"))

let imc = calculo_imc(altura, peso)

if (imc <= 16.9) {
    alert("Muito abaixo do peso")
} else if (imc >= 17 && imc <= 18.4) {
    alert("Abaixo do peso")
} else if (imc >= 18.5 && imc <= 24.9) {
    alert("Peso normal")
} else if (imc >= 25 && imc <= 29.9) {
    alert("Acima do peso")
} else if (imc >= 30 && imc <= 34.9) {
    alert("Obesidade grau I")
} else if (imc >= 35 && imc <= 40) {
    alert("Obesidade grau II")
} else if (imc >= 40) {
    alert("Obesidade grau III")
} else {
    alert("Erro")
}

// Programa conversão real para euro ou qualquer cotação que quiser

function conversao(real, cotacao) {
    let valor = real/cotacao
    return valor 
}

let real = parseFloat(prompt("Quantos reais quer converter?"))
let cotacao = parseFloat(prompt("Qual a cotação da moeda desejada?"))

let valor_convertido = conversao(real, cotacao)

alert(valor_convertido)

