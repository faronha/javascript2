class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade

    }
    apresentar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

const aluno1 = new Pessoa("Juliana", 24)
// aluno1.apresentar();

class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca
        this. modelo = modelo
        this.ano =ano
    }
    exibirInfor(){
        console.log(`Carro: ${this.marca} ${this.modelo} ${this.ano}`)
    }
}  
const meuCarro = new Carro("Nissan","Versa",2008)
// meuCarro.exibirInfo()

class Aluno {
    constructor(nome, nota){
        this.nome = nome
        this.nota = nota
    }
    verificarAprovação(){
        if(this.nota >= 6){
            console.log(` parabens!${this.nome},  Você foi aprovado(a)`)
        }else{
            console.log(`que pena ${this.nome}, Você foi reprovado(a)`)
        }
    }
}
const aluno = new Aluno("Gabriel", 7)
aluno.verificarAprovação()
const aluno2 = new Aluno("Roberto", 4)
aluno2.verificarAprovação()