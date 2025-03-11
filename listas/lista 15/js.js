function some(){
    let sumir = document.getElementById("sumir")
    if (sumir.style.display == "none"){
        sumir.style.display = "block"
    } else {
        sumir.style.display = "none"
    }
}

function mudarCor(){
    texto.style.color = "white"
    texto.style.backgroundColor = "black"
}

function texto(){
    var nome = "farinha"
    var idade = "16"
    var cidade = "ubatuba"
    var escola = "escola da vida"
    var curso = "dilatação"

    var texto = "Meu nome é " + nome + ", tenho " + idade + " anos, moro em " + cidade + ", estudo no " + escola + " e faço o curso de " + curso + "."

    
    document.getElementById("textoCompleto").innerText = texto

}

let botao1 = document.getElementById("botao1")
let cores = ["green", "blue", "yellow"]
let trocar = 0

botao1.addEventListener("click", function () {
    
    texto2.style.color = cores[trocar]
    trocar = (trocar + 1) 
    if(trocar > 3){
        trocar = 0
    }

})

function naoClique(){
    botao2.addEventListener('click', function (){
        alert("Pare de clicar no botão!")
    })
}

function porta(numero) {
    if (numero === 1) {
        alert("Voce ganhou um Camaro");
        document.getElementById("imagem1").src = "camaro.jpg"; 
    } else if (numero === 2) {
        alert("Voce nao ganhou nada :(");
        document.getElementById("imagem2").src = "portaaberta.png"; 
    } else if (numero === 3) {
        alert("BOAAA você encontrou o tesouro");
        document.getElementById("imagem3").src = "tesouro.jpg"; 
    }
}

function redimensionar() {
    var tamanhoAleatorio = Math.floor(Math.random() * (300 - 20 + 1)) + 20;

    document.getElementById("roadhog").style.width = tamanhoAleatorio + "px";
}

let vermelho = document.getElementById("vermelho")
let amarelo = document.getElementById("amarelo")
let verde = document.getElementById("verde")
    vermelho.style.backgroundColor = "red "
function semaforo(){
    if (vermelho.style.backgroundColor == "red"){
        vermelho.style.backgroundColor = "black"
        amarelo.style.backgroundColor = "yellow"
        verde.style.backgroundColor = "black"
        alert("Pare")
    }else if (amarelo.style.backgroundColor =="yellow"){
        vermelho.style.backgroundColor = "black"
        amarelo.style.backgroundColor = "black"
        verde.style.backgroundColor = "green"
        
    }else{
        vermelho.style.backgroundColor = "red"
        amarelo.style.backgroundColor = "black"
        verde.style.backgroundColor = "black"
        alert("Pode Passar!")
    }
    
} 



   
    let filmes = document.querySelectorAll("#filmes div");


    filmes.forEach(function(filme) {
        filme.addEventListener("mouseover", function() {
            let imagem = filme.querySelector("img");
            if (filme.id === "filme1") {
                imagem.setAttribute("src", "Gente grande.jpg"); 
            } else if (filme.id === "filme2") {
                imagem.setAttribute("src", "5 pasos.webp"); 
            } else if (filme.id === "filme3") {
                imagem.setAttribute("src", "Transformers.jpg"); 
            }
        });

        filme.addEventListener("mouseout", function() {
            let imagem = filme.querySelector("img"); 
            if (filme.id === "filme1") {
                imagem.setAttribute("src", "comedia.png"); 
            } else if (filme.id === "filme2") {
                imagem.setAttribute("src", "romance.png"); 
            } else if (filme.id === "filme3") {
                imagem.setAttribute("src", "acao.png"); 
            }
        });
    });