let media = 7.345676
console.log(`A média do Aluno é: ${media.toFixed(2)}`)

let curso = 'Instituto Percorre'
let nome = 'Ermeson da Silva Barros'

console.log(curso.charAt(4)) // Acesso a caracteres
console.log(nome.length) // Valor numérico da var
console.log(typeof nome) // Tipo de dado
console.log(curso.toUpperCase()) // Tudo maiúsculo
console.log(curso.toLowerCase()) // Tudo minúsculo
console.log(curso.substring(10))
console.log(nome.substring(11, 16))

let novo_nome = nome.split(" ")
console.log(novo_nome)
let nome2 = nome.replace("Barros", "Santos")
console.log(nome2)