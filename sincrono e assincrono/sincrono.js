function tarefaDemorada(){
    const agora = new Date();
    const futuro = agora.getTime() + 3000
    while (new Date().getTime() < futuro){}
}

console.log("Iniciando o programa...")
console.log("Executando tarefa 1")
tarefaDemorada() 
console.log("Tarefa 1 concluida")

console.log("Executando tarefa 2")
tarefaDemorada()
console.log("Tarefa 2 concluida")
console.log("Programa finalizado")

