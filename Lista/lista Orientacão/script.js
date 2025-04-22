class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }

    mostrarDetalhes() {
        console.log(`O livro é "${this.titulo}" do autor: ${this.autor}, lançado em ${this.paginas}`)
    }
}

const livro1 = new Livro("AlgumLivroAe", "Algum autor AI", 2008)
livro1.mostrarDetalhes() 
// 2

class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular
        this.saldo = saldo
    }

    exibirInfo() {
        console.log(`${this.titular}, você tem R$${this.saldo} de saldo.`)
    }

    depositar(valor) {
        this.saldo += valor
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor
        } else {
            console.log("Saldo insuficiente.")
        }
    }

    verSaldo() {
        console.log(`Saldo atual: R$${this.saldo}`)
    }
}

const conta = new ContaBancaria("Gabriel", 3000)
conta.exibirInfo()
conta.depositar(800)
conta.sacar(200)
conta.verSaldo()

// 3
class Pet {
    constructor(Nome, Especie, Idade){
        this.Nome = Nome
        this.Especie = Especie
        this.Idade = Idade
    }
    Cachorro(){
        if(`${this.Especie} = "Cachorro`){
            console.log(`Seu ${this.Nome} é um ${this.Especie} e tem ${this.Idade} Anos. `)
            console.log("AU AU")
        }
    }
    Gato(){
        if(`${this.Especie} = Gato`)
            console.log(`Seu ${this.Nome} é um ${this.Especie} e tem ${this.Idade} Anos. `)
            console.log("MIAU MIAUUUUUUUUU")
        }

    Porco(){
        if(`${this.Especie} = "Porco"`){
            console.log(`Sua ${this.Nome} é um ${this.Especie} e tem ${this.Idade} Anos. `)
            console.log("OINC OINC")
        }
        }
    
}   


const  pet1 = new Pet ("Bixin", "Cachorro", 12)
const  pet2 = new Pet ("Bixano","Gato", 5)
const  pet3 = new Pet ("Peppa","Porco", 22)

pet1.Cachorro( )
pet2.Gato()
pet3.Porco()

// 4

class Filme{
    constructor(titulo, genero, duracao){
        this.titulo = titulo
        this. genero = genero 
        this.duracao = duracao
    }
    assistir(){
        console.log(`Você está assistindo ${this.titulo}, que tem como genero ${this.genero} e dura ${this.duracao} minutos.`)
    }
}

const filme1 = new Filme ("Transformers", "Ação", 180)
const filme2 = new Filme ("Moana", "Legal", 107)
const filme3 = new Filme ("Velozes e Furiosos", "Acão", 180)

filme1.assistir()
filme2.assistir()
filme3.assistir()

// 5

class Musica {
    constructor(titulo, artista, tempo){
        this.titulo = titulo
        this.artista = artista
        this.tempo = tempo
    }
    Tocar(){
        console.log(`Tocando ${this.titulo},${this.artista} tempo: ${this.tempo} minutos`)
    }       
}

const musica = new Musica ("AMADO", "Vanessa da Mata", 5)

musica.Tocar()