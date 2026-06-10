// Programa de laço while de 1 a 10

contador = 1

while (contador <= 10) {
    console.log(contador)
    contador++
}

// Programa de soma com uso de "do-while"

let numero 
let contagem = 0

do {
    numero = parseInt(prompt("Digite um número para somar, caso queira sair digite '0': "))
    contagem = contagem + numero
} while (numero !== 0)

alert(contagem)

console.log("///////////////")

// Programa para mostrar tabuada de 1 a 10

let tabuada = parseInt(prompt("Digite um número para tabuada de 1 a 10"))

console.log(`A tabuado do ${tabuada}`);

for (let i = 0; i <= 10; i++) {
    console.log(`${tabuada} X ${i} = ` + (tabuada * i))
}