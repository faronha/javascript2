for(let contador = 1; contador <=30; contador++)
    {
    console.log(contador)
    }

console.log("--------------")

for(let regressiva = 30; regressiva >=1; regressiva--)
    {
    console.log(regressiva)
    }


console.log("--------------")


for (let n = 1; n <= 5; n++) {
    let n = prompt('Digite o número:')
    n = 0  

    if (n >= 50) {
        console.log("Acima da Média")
    } else {
        console.log("Abaixo da Média")
    }
}

console.log("--------------")


let numero = prompt("Digite um número para ver sua tabuada:")
for (let taboada = 1; taboada <= 10; taboada++){
    

    let resultado = numero * taboada
    console.log(resultado)
     
    }

console.log("---------------------")


    for (let patinhos = Number(prompt("Pato")); patinhos > 0; patinhos--) {
        console.log(patinhos, " patinhos foram passear")
        console.log("Além das montanhas")
        console.log("Para brincar")
        console.log("A mamãe gritou: Quá, quá, quá, quá")
        console.log("Mas só ", patinhos - 1, " patinhos voltaram de lá.")
    }


console.log("------------")

for (let idade = 1; idade <= 10; idade++) {
    let idade = prompt('Digite o número:')
    idade = 0  

    if (idade >= 18) {
        console.log("De maior")
    } else {
        console.log("Menor de Idade")
    }
}

console.log("--------------------")

for (let i = 1; i <= 5; i++) {
    let voto = Number(prompt("digite o número do voto (1, 2, 3, 4 para candidatos ou 5 pro nulo, 6 voto em Branco papito):"))
    
    if (voto == 1) {
        console.log("Voto para o Candidato 1")
    } else if (voto == 2) {
        console.log("Voto para o Candidato 2")
    } else if (voto == 3) {
        console.log("Voto para o Candidato 3")
    } else if (voto == 4) {
        console.log("Voto para o Candidato 4")
    } else if (voto == 5) {
        console.log("Voto Nulo")
    } else if (voto == 6) {
        console.log("Voto em Branco")
    } else {
        console.log("Código inválido. Por favor, digite um número de 1 a 6.")
    }
}
