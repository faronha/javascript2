function mensagem() {
    console.log("eu gosto de javascript")
}
mensagem();

console.log("---------------")

function cinco() {
    for (let i = 1; i <= 5; i++) {
        console.log(i)
    }
}
cinco()

console.log("---------------");

function oi() {
    let nome = prompt("qual seu nome")
    console.log("ola, " + nome + " seja bem-vindo(a)!")
}
oi()

console.log("---------------")

function multipli(a, b) {
    console.log(a * b);
}
multipli(3, 5);
console.log("---------------");

function idade() {
    let idade = prompt("qual sua idade?")
    if (idade >= 18) {
        console.log("maior de idade")
    } else {
        console.log("menor de idade")
    }
}
idade();




console.log("---------------")

function retangulo() {
    let largura = prompt("Quale a largura");
    let altura = prompt("Quale a aultura");
    console.log(largura * altura);
}
retangulo()

console.log("---------------")

function comparador() {
    let idade1 = prompt("Idade da primeira velha");
    let idade2 = prompt("Idade da segunda velha");
    if (idade1 > idade2) {
        console.log("A primeira e mais velha.");
    } else if (idade1 < idade2) {
        console.log("A segunda e mais velha.");
    } else {
        console.log("As duas pessoas tem a mesma idade.");
    }
}
comparador()

console.log("--------------")
