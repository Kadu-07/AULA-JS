class Aluno {
    constructor(_nome, _ra, _curso, _matricula) {
        this.nome = _nome
        this.ra = _ra
        this.curso = _curso
        this.matricula = _matricula
    }

    alunoFaz () {
        return `${this.nome} fala Grabriellll`
    }
}

let aluno1 = new Aluno("carlos", 1234, "dev web", true)
let aluno2 = new Aluno("Fabricio", 4567, "dev web", true)
let aluno3 = new Aluno("Ermeson", 5678, "dev web", false)
