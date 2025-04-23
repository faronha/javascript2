let idade = Number(prompt("Voce tem quantos anos"))
let cnh = true

if (cnh == true && idade >= 18) {
    console.log("Você pode dirigir")
} else{
    console.log("Você não pode dirigir")
}

console.log("----------------")

tempoTrabalho = Number(prompt("Voce tem quantos anos de trabalho?"))
projetos = Number(prompt("Voce tem quantos projetos?"))
if (tempoTrabalho >= 5 || projetos >= 10 ) {
    console.log("Voce esta elegivel para promoção")
} else {
    console.log("Você nao esta aceito para vaga")
}

console.log("--------------")

idade = Number(prompt("Voce tem quantos anos?"))

if (idade >= 18 && idade <= 30) {
    console.log("Voce pode entrar no evento")
} else {
    console.log("Voce nao pode entrar no evento")
}

console.log("---------------")


let idade1 = Number(prompt("Voce tem quantos anos"))
let experiencia = true

if(idade1 >= 21 && clienteVip == true) {
    console.log("Você ganhou frete grátis")
} else {
    console.log("Tem que pagar o frete")
}

console.log("----------------")

usuario = Number(prompt("Qual seu usuario"))
senha = Number(prompt("Qual sua senha?"))

if (senha = 1234 && usuario === "admin") {
    console.log("Login bem-sucedido")
}else {
    console.log("Login negado")
}

console.log("----------------")

numero = Number(prompt("Coloque seu numero?"))

if (numero >= 10 && numero <= 20) {
    console.log("O número esta de entra 10 a 20")
} else if (numero >= 30 && numero <= 50){
    console.log("O número esta de entra 30 a 50")
}else {
    console.log("Nao esta dentro de 10 a 20 0u 30 a 50")
}

console.log("-----------------")
numeros = Number(prompt("Coloque seu numero entre 10,100"))


if (numeros < 10 && numeros > 100) {
    console.log("O numero é aceito")
} else if (numeros > 10  && numeros < 100){
    console.log("O numero nao é aceito")
}
