

let saudacao = function(nome){
    console.log("Ola", nome)
}

saudacao (prompt("Qual seu nome?"))

console.log("")

console.log("---------------")

let soma = function(num1,num2){
    console.log(num1+num2)
}

let num1 = Number(prompt("Digite um numero"))
let num2 = Number(prompt("Digite outro numero"))

soma(num1,num2)

console.log("")

console.log("---------------")

let retangulo = function(num1,num2){
    console.log(num1*num2)
}

num1 = Number(prompt("Digite um numero"))
num2 = Number(prompt("Digite outro numero"))

retangulo(num1,num2)

console.log("")

console.log("---------------")

let num = (num3) => num3*2
let num3 = Number(prompt("Escolha um numero:"))

console.log(num(num3))

console.log("")

console.log("---------------")

let num4 = (num5) => num5*num5
let num5 = Number(prompt("Escolha um numero:"))

console.log(num4(num5))

console.log("")

console.log("---------------")

let verify = (idade) => idade >= 18 ? "Maioridade" : "Menor de idade"

let idade = Number(prompt("Qual sua idade?"))
console.log(verify(idade))

console.log("")

console.log("---------------")

let media = (nota1, nota2, nota3) => {
    let notaGeral= (nota1+nota2+nota3)
    let result = (notaGeral/3)
    return (result)
}

let nota1 = Number(prompt("Qual sua primeira nota?"))
let nota2 = Number(prompt("Qual sua segunda nota?"))
let nota3 = Number(prompt("Qual sua terceira nota?"))

console.log(media(nota1,nota2,nota3))