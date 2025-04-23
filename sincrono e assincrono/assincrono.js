function tarefaDemorada(nome, tempo) {
    setTimeout(() => {
        console.log(`Tarefa ${nome} concluida`)

    }, tempo)
}

console.log("iniciando o programa")
console.log("Executando a tarefa 1")
tarefaDemorada("1, 300")

console.log("Executando a tarefa 2")
tarefaDemorada("2,3000")

console.log("Programa Fizando (mas as tarefas ainda estão acontecendo ")