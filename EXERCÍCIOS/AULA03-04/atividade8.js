let altura = parseFloat(prompt("Qual a sua altura?(em metros)"))
let peso = parseFloat(prompt("Qual o seu peso?(em quilogramas)"))

let imc = (peso / (altura**2)).toFixed(2)

if (imc >= 18.5 && imc <= 24.9) {
    alert(`O seu IMC é de ${imc} e está dentro do intervalo saudável`)
} else {
    alert(`O seu IMC é de ${imc} e não está dentro do intervalo saudável`)
}