const botaoAbrirPopUp = document.getElementById("abrirPopUp")
const popup = document.getElementById("popup")
const fundo = document.getElementById("fundo")
const mensagem = document.getElementById("mensagem")

botaoAbrirPopUp.addEventListener("click", () => {
    popup.classList.remove("escondido")
    fundo.classList.remove("escondido")
})

// function responder(resposta){
//     mensagem.innerText = "Voce escolheu:"+ resposta
//     popup.classList.add ("escondido")
//     fundo.classList.add("escondido")

// }

function abrirHTML() {
    window.location.href = "sobre.html"

}
function abrirSite() {
    window.location.href = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMhS048iSd55xjGfXWQTN2r09TpenOclsmQ&s"
}