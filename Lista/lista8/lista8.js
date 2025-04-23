let contador = 1

do {
  console.log(contador)
  contador++
} while (contador <= 20)

console.log("----------")

let resposta;

do {
  resposta = prompt("Deseja continuar (s/n)?")
} while (resposta != "s")

console.log("BOOOUAAAA")

console.log("-------------")


let numero = 1
let final = Number(prompt("Escreva aonde voce quer chegar"))

do{
    console.log(numero)
    numero++
} while (numero < final) 
    console.log(numero)


console.log("---------------")


let sequencia = 1
let fim = 31

do{
    console.log(sequencia)
    sequencia += 2
} while (sequencia < fim) 
    console.log(sequencia)

console.log("--------------")

let cont = 0

do {
  let numerado = prompt("Digite o pra ver onde ele se encaixa:") 
  if (numerado > 0) {
    console.log("esse numero é positivo meu chefe")
  } else if (numerado < 0) {
    console.log("ta que nem tua conta bancaria na NEGATIVA")
  } else {
    console.log("È 0 pae")
  }

  cont++
} while (cont != 5)


let resposta2; 

do {
  resposta2 = prompt("Deseja fazer uma conta? (s/n)");

  if (resposta === "s") { 
    let numero1 = Number(prompt("Digite o primeiro número:")); 
    let numero2 = Number(prompt("Digite o segundo número:")); 

    let soma = numero1 + numero2; 
    console.log("A soma é: " + soma); 
  } else if (resposta !== "n") { 
    console.log("Opção inválida."); 
  }
} while (resposta2 === "s"); 

console.log("Calculadora encerrada."); 