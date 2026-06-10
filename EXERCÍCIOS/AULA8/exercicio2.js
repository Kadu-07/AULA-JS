class Carro {
    constructor(_ano, _modelo, _marca, _cor){
        this.ano = _ano
        this.modelo = _modelo
        this.marca = _marca
        this.cor = _cor
    }

    carroModelo() {
        console.log(`O carro do modelo ${this.modelo} é da ${this.marca}`);
    }

    carroIA() {
        return `Eu sou do ano ${this.ano}`
    }
} 

let carro1 = new Carro(2024, "SUV", "Fiat", "Vermelho")

let carro2 = new Carro(2026, "Sedã", "BYD", "Branco")

carro1.carroModelo()
let string_carro1 = carro1.carroIA()
console.log(string_carro1);

carro2.carroModelo()
let string_carro2 = carro2.carroIA()
console.log(string_carro2);
