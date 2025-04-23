let numero = Number(prompt("Digite um número entre 1 e 7:"))

switch (numero) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda-feira")
        break
    case 3:
        console.log("Terça-feira")
        break
    case 4:
        console.log("Quarta-feira")
        break
    case 5:
        console.log("Quinta-feira")
        break
    case 6:
        console.log("Sexta-feira")
        break
    case 7:
        console.log("Sábado")
        break
    default:
        console.log("Número inválido. Insira um valor entre 1 e 7.")
}

console.log("-------------------")

let idade = Number(prompt("Digite a idade:"))

switch (idade) {
    case 5:
        console.log("Infantil A")
        break
    case 10:
        console.log("Infantil B")
        break
    case 15:
        console.log("Juvenil A")
        break
    case 20:
        console.log("Juvenil B")
        break
    case 30:
        console.log("Adulto")
        break
    default:
        console.log("Idade inválida. Insira 5, 10, 15, 20 ou 30.")
}

console.log("-------------------")

let turno = prompt("Informe o turno (M, V ou N):")

switch (turno) {
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Boa tarde!")
        break
    case 'N':
        console.log("Boa noite!")
        break
    default:
        console.log("Turno inválido. Insira M, V ou N.")
}


console.log("-------------------")

let mensagem = Number(prompt("Digite um número entre 1 e 5:"))

switch (mensagem) {
    case 1:
        console.log("Boa noite")
        break
    case 2:
        console.log("Gostaria de pedir pizza")
        break
    case 3:
        console.log("Uma meia portuguesa e marguerita e outra frango")
        break
    case 4:
        console.log("Borda Recheada")
        break
    case 5:
        console.log("Cheddar")
        break
    default:
        console.log("Número fora do intervalo. Insira um valor entre 1 e 5.")
}


console.log("-------------------")

let estacao = Number(prompt("Digite um número entre 1 e 4 para a estação do ano:"))

switch (estacao) {
    case 1:
        console.log("Primavera")
        break
    case 2:
        console.log("Verão")
        break
    case 3:
        console.log("Outono")
        break
    case 4:
        console.log("Inverno")
        break
    default:
        console.log("Estação inválida. Insira um número de 1 a 4.")
}
