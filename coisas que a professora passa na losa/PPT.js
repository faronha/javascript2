let placarJogador = 0
let placarPC = 0

let rodada = Number(prompt("Quantas vezes deseja jogar?"))

for(let i = 0; i<rodadas; i ++){
     
const escolhaJogador = prompt("Escolha pedra, papel ou tesoura:")
const escolhaPC = ["pedra", "papel", "tesoura"]
[Math.floor(Math.random()* 3)]

alert(`Você escolheu ${escolhaJogador}`)
alert(`O computador escolheu ${escolhaPC}`)

if(escolhaJogador == escolhaPC) {
    alert("Empate")
} else if (escolhaJogador == "pedra" && escolhaPC == "tesoura") {
    alert("Você venceu")
    placarJogador++
} else if (escolhaJogador == "tesoura" && escolhaPC == "papel") {
    alert("Você venceu")
    placarJogador++
} else if (escolhaJogador == "papel" && escolhaPC == "pedra") {
    alert("Você venceu")
    placarJogador++
} else {
    alert("Você perdeu")
    placarPC++
}
 console.log("Placar jogador:", placarJogador)
 console.log("Placar computador:", placarPC)

 alert(`Fim de jogo! Placar final: JOgador ${placarJogador} x ${placarPC} Computador`)

}