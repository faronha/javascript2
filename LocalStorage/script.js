
// QUANDO CARREGAR A PAGINA, MOSTRAR O QUE JA ESTAVA SALTO
window.onload = function(){
    const textoSalvo = localStorage.getItem("minhaAnotacao")
    if (textoSalvo) {
        document.getElementById("anotacao").value = textoSalvo
    }
}


// SALVAR QUANDO CLICAR NO BOTÃO

function salvarAnotacao(){
    const conteudo = document.getElementById("anotacao").value
    localStorage.setItem("minhaAnotacao", conteudo)
    alert("Nota salva com sucesso")
}