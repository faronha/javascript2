let idade = Number(prompt("Qual sua idade"))

if (idade <= 12) {
    console.log("Criança")
} else if (idade <= 17) {
    console.log("Adolescente")
} else if (idade <= 59) {
    console.log("Adulto")
} else {
    console.log ("Idoso")
}

console.log("------------")

let temperatura = Number(prompt("Qual a Temperatura"))

if (temperatura <= 10) {
    console.log("Muito Frio")
} else if (temperatura <= 20) {
    console.log("Frio")
} else if (temperatura <= 30) {
    console.log("Agradavel")
} else {
console.log ("Muito Quente")
}

console.log("----------------")

let turno = String(prompt ("Qual seu turno: M,V,N?"))

if (turno = "M") {
    console.log ("Bom dia")
} else if (turno = "V") {
    console.log("Boa tarde")
} else if (turno = "N") {
    console.log ("Boa noite")
} else {
    console.log("Turno invalido")
}

console.log("-----------------")

let valor = Number(prompt("Qual seu valor?"))

if (valor <= 100) {
    console.log("Desconto de 5%")
} else if (valor <=200){
    console.log ("Desconto de 10%")
}else if (valor > 200) {
    console.log ("Voce recebera um desconto de 15%")
}

console.log("----------------------")

let nota = Number(prompt("Qual sua nota"))

if (nota > 90 ) {
    console.log("A")
}else if (nota > 80) {
    console.log("B")
}else if (nota >= 70) {
    console.log("C")
}else if (nota >= 60){
    console.log("D")
}else if (nota < 60){
    console.log("F")
}

console.log("-----------------")

let dia = Number(prompt("Qual e o numero do dia:"))

if (dia = 1){
    console.log("Domingo")
}else if (dia = 2){
    console.log("Segunda-feira")
}else if (dia = 3){
    console.log("Terça-feira")
}else if (dia = 4){
    console.log("Quarta-feira")
}else if (dia = 5){
    console.log("Quinta-feira")
}else if (dia = 6){
    console.log("Sexta-feira")
}else if (dia = 7){
    console.log("Sábado")
}

console.log("---------------")

let pontuacao = Number(prompt("Qual sua pontuação"))

if (pontuacao <= 1000) {
    console.log("Iniciante")
} else if (pontuacao <= 5000) {
    console.log ("Intermediário")
}else if (pontuacao <= 10000) {
    console.log ("Avançado")
}else if (pontuacao > 10000) {
    console.log ("Mestre")
}