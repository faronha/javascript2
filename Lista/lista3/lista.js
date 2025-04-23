
let idade = prompt("Qual sua idade?")
console.log("Voce tem", idade, "Anos.")

if (idade >= 18) {
    console.log("Voce é maior de idade")
} else {
    console.log ("Você é mebir de idade")
}

console.log("-----------------------")

let numero = prompt ("Escolha um número:")
let resultado = numero % 2 
if (resultado == 0) {
    console.log("O número é par")
} else {
    console.log("O número é impar")
}

console.log("-------------------")

let nota = prompt("Qual sua nota?")

if (nota >= 7) {
    console.log ("Aprovado")
} else {
    console.log("Reprovado")
}

console.log("---------------")

let idade1 = prompt ("Qual sua idade senhor.")
console.log("Eu tenho", idade1, "anos.")

if (idade1 >= 18){
    console.log("Voce pode entrar")
} else {
    console.log("Voce nao tem idade o suficiente para entrar.")
}

console.log ("-------------")

let senha = prompt ("Digite a senha")
console.log ("A senha é", senha)

if (senha === 1234){
    console.log("Senha correta")
}else {
    console.log("Senha incorreta")
}

console.log("-----------------")

let temperatura = prompt ("Qual e a temperatura de hoje?")
console.log ("Sao", temperatura, "Graus")

if (temperatura >= 30){
    console.log("Está quente")
}else {
    console.log("Esta frio")
}

console.log("-----------------")

let numeração = prompt ("Digite um numero")
console.log ("Seu numero é", numeração)

if (numeração >= 0.0000000000000) {
    console.log("Seu numero é positivo")
}else {
    console.log("Seu numero é negativo")
}