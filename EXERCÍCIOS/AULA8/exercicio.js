let peso = 0
let altura = 0 


const salvarPeso = () => {
    peso = parseFloat(prompt("Digite seu peso"))
}

const salvarAltura = () => {
    altura = parseFloat(prompt("Digite sua altura"))
}

const seuImc = () => {
    let imc = (peso/(altura**2)).toFixed(2)
    if (imc >= 0) {
        alert(`Seu IMC é ${imc}`)
    } else {
        alert("Erro")
    }
}