let texto = document.getElementById("texto")
texto.innerText = "Abadabadu"
let botao = document.getElementById("botao")

botao.addEventListener("click", function () {
    texto.style.color = "purple"

})

let botao2 = document.getElementById("botao2")

botao2.addEventListener("click", function () {
    botao2.style.color = "red"
    alert("botão clicado")
})

let texto2 = document.getElementById("texto2")
texto2.innerText = "Roberto"
let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick", function () {
    texto2.style.fontSize = "20px"
})


let passe = document.getElementById("passe")
passe.addEventListener("mouseover", function () {
    passe.innerText = "passe o mouse aqui"
    passe.style.backgroundColor = "red"
})


let botao3 = document.getElementById("botao3")
let imagem = document.getElementById("imagem")
botao3.addEventListener("click", function () {

    imagem.style.height = "200px"
    imagem.style.width = "200px"
})

let botao4 = document.getElementById("botao4")
let imagem2 = document.getElementById("imagem2")

botao4.addEventListener("click", function () {

    imagem2.style.borderRadius = "100px"
})



let texto3 = document.getElementById("texto3")
texto3.innerText = "Parágrafo para o botão 5"

let botao5 = document.getElementById("botao5")

botao5.addEventListener("click", function (){

    texto3.style.backgroundColor = "blue"
    texto3.style.color = "red"
    texto3.style.width ="300px"
})

let texto4 = document.getElementById("texto4")
texto4.innerText = "Parágrafo para o botão 6"

let botao6 = document.getElementById("botao6")

botao6.addEventListener("click", function (){

    texto4.style.backgroundColor = "blue"
    texto4.style.color = "red"
    texto4.style.fontSize = "30px"
    texto4.style.width ="300px"
})

let texto5 = document.getElementById("texto5")
texto5.innerText = "Parágrafo para o botão 7"

let botao7 = document.getElementById("botao7")

botao7.addEventListener("click", function (){

    texto5.style.backgroundColor = "blue"
    texto5.style.color = "red"
    texto5.style.fontSize = "40px"
    texto5.style.borderRadius = "80px"
    texto5.style.width ="400px"
})




