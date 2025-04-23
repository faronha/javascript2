let idade = prompt("Qual sua idade?")
console.log("Sua idade é", idade)

if (idade >= 18) {
    console.log("Voce é maior de idadez")
} else {
    console.log ("Você é mebir de idade")
}
console.log("-------------------------")
let numero = prompt ("Escolha um número:")
let resultado = numero % 2 
if (resultado == 0) {
    console.log("O número é par")
} else {
    console.log("O número é impar")
}
console.log("--------------------------------------------------")
let nota1 = prompt("Qual a primera nota")
let nota2 = prompt("Qual a Segunda nota")
let total = (nota1 + nota2) / 2
if (total >= 7) {
    console.log ("Aprovado")
} else {
    console.log("Reprovado")
}
