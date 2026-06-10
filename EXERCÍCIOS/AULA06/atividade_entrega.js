// Programa de aplicação de desconto de acordo com cupom

let desc = prompt("Digite o cupom:").toUpperCase()

let valor = 1000
let valor_desc 
let cupom 

switch (desc) {
    case "DESC1":
        valor_desc = valor - (valor * 0.05)
        cupom = true
        break;

     case "DESC2":
        valor_desc = valor - (valor * 0.1)
        cupom = true
        break;
    
    case "DESC3":
        valor_desc = valor - (valor * 0.15)
        cupom = true
        break;

    case "DESC4":
        valor_desc = valor - (valor * 0.20)
        cupom = true
        break;

    case "DESC5":
        valor_desc = valor - (valor * 0.25)
        cupom = true
        break;
    default:
        cupom = false
        break;
}

if (cupom) {
    alert("Cupom aplicado")
    alert(`O valor do produto é de: ${valor} e com desconto é de: ${valor_desc}`)
} else {
    alert('Cupom inválido')
    alert(`O valor do produto é de: ${valor}`)
}

//  Jogo de adivinhação

let escolhido = Math.floor(Math.random() * 10) + 1

let jogar = "SIM"

while(jogar === "SIM") {
    let adivinha = parseInt(prompt("Escolha um número de 1 a 10"))
    if (adivinha < 1 || adivinha > 10) {
        adivinha = parseInt(prompt("Escolha um número de 1 a 10"))
    }

    if (adivinha === escolhido) {
        alert("Parabéns, você acertou!")
        jogar = prompt("Jogar novamente? (Digite sim ou não)").toUpperCase()
        escolhido = Math.floor(Math.random() * 10) + 1
    } else {
        alert("Tente novamente")
}
}




