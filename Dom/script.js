let titulo = document.getElementById("titulo")
console.log(titulo.innerText)


let texto = document.getElementById("texto")
texto.innerText = "Texto Alterado"

texto.style.color = "blue"

let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
    alert("botão clicado")
})

let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick", function () {
    duplo.style.backgroundColor = "red"
})

let passe = document.getElementById("passe")
passe.addEventListener("mouseover", function(){
    passe.innerText = "passe o mouse aqui"
    passe.style.backgroundColor = "blue"
    passe.style.fontSize = "16px"
})


