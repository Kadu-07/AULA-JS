let nomes = ["João", "Helena", "Pietro", "Eduardo", "Duda", "Brum"]
// 
let idades = [10, 58, 7, 18]
// Item | String
// Index | Number
// Array | ["João", "Helena", "Pietro", "Eduardo"]

// nomes.forEach(function enviarEmail(nome, numero, turma01) {
//     console.log(`E-mail foi enviado para: ${nome} `);
//     console.log(`Número da chamada: ${numero} \n`);
//     if (numero == (turma01.length - 1)) {
//         console.log(`Alunos da turma 01: ${turma01}`);
//     }
    
// })

nomes.forEach((nome, numero, turma01) => {
    console.log(`E-mail foi enviado para: ${nome}`);
    console.log(`Número da chamada: ${numero} \n`);
    if (numero == (turma01.length - 1)) {
        console.log(`Alunos da turma 01: ${turma01}`);
    }    
})