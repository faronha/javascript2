let contador = 1

while (contador <= 10){
console.log(contador)
contador += 1
}

console.log("----------------")

let numero = prompt("Digite um número para ver sua tabuada:")
let taboada = 1

while (taboada <= 10) {
  let resultado = numero * taboada
  console.log(resultado)
  taboada++
}

console.log("--------------")

let contagem = 10

while (contagem >= 1) {
  console.log(contagem)
  contagem--
}

console.log("----------------")



let senha = prompt("Digite a senha:")

while (senha != 1234) {
  senha = prompt("Senha incorreta. Tente novamente:")
}
console.log("Senha correta!")

console.log("----------")


let nmr = 50

while (nmr <= 100){
console.log(nmr)
nmr += 1
}

console.log("----------")

let cinco = 0

while (cinco <= 100){
console.log(cinco)
cinco += 5
}

console.log("----------")

let mensagem = 0
while (mensagem < 5) { 
  console.log ("Eu gosto de JavaScript")
  mensagem++
}


console.log("---------------------")

let nomeUsuario = prompt("Qual seu Nome?")
let numeroUsuario = Number(prompt("Qual seu Numero??"))

while (numeroUsuario >= 1 ) {
  console.log(nomeUsuario)
  numeroUsuario--
}