let jogos = ['Roblox', 'Valorant', 'LOl', 'Minecraft']
console.log(jogos[0], jogos[2]);

let bidimensional = [
    ['I', 'II', 'III'],
    ['IV', 'V', 'VI'],
    ['VII', 'VIII', 'IX']
]

console.log(bidimensional);

let extraido_um = jogos.shift
let extraido_dois = jogos.pop()


jogos.pop()

jogos.push("Hollow Knight")
jogos.push("Spider-Man")
jogos.unshift("Subnautica")

console.log(jogos);


// let bidimensional_formatada = bidimensional.map(linha => linha.join('\t')).join('\n')
// console.log(bidimensional_formatada);
