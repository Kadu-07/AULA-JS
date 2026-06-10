let frutas = ["Abacate", "maça", "abacaxi", "bergamota"]
// valor | index| array
frutas.forEach((frutas, numero, lista) => {
    console.log(`Fruta: ${frutas}`);
    console.log(`Index: ${numero}`);
    console.log(`Array completa: ${lista} \n`);
})

let frutasMaior = frutas.map((fruta)=>{
    return fruta.toUpperCase()
})

console.log(frutasMaior)

let idade_alunos = [18, 18, 24, 19, 19, 19, 28, 15, 17, 15, 31]

let idade_maiores = idade_alunos.filter((idade) => {
    return idade > 17
})

console.log(idade_maiores);

