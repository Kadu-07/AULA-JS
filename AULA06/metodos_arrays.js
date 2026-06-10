// 
let Akira = ['Lucas', 'Sophia', 'Ferrari', 'Ben-hur', 'Haniel']
// 
let aluno = ["Cadu", 12345, true, "Dev. Web"]
console.log(aluno);

let aluno_string = aluno.toString() // toString() Converte para String
console.log(aluno_string);

//

let aluno_join = aluno.join(' == ') // join(' == ') Converte para String e podemos utilizar um caracter para separar os elementos
console.log(aluno_join);

let Alt = ['Barbara', 'Helena', 'Gabi', 'Brenda', 'Nalu']
console.log(Alt);

//

let new_Alt = Alt.pop() // pop() remove o último elemento da array
console.log(Alt);
console.log(new_Alt);

//

Alt.push("Gabriel") // push() insere um elemento no final da array
console.log(Alt);

//

let new_alt2 = Alt.shift() // shift() remove o elemento no inicio da array
console.log(Alt);
console.log(new_alt2);

//

Alt.unshift('Cazuza') // unshift() insere um elemento no inicio da array
console.log(Alt);
