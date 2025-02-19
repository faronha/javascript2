let filmes= ["transformers", "velozes e furiosos", "gato de botas "]

console.log(filmes[0]) 

console.log("----------------")



let frutas = ["kiwi", "banana", "laranja", "uva", "melancia"]

console.log(frutas[2])


console.log("----------------")

let cores = ["vermelho", "azul", "verde"]

cores.push("amarelo")  
for (let i = 0; i < cores.length; i++) {
  console.log(cores[i]) 
}


console.log("----------------")

let numeros = [1, 2, 3, 4];
numeros.pop();  
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i])
}


console.log("----------------")


let cidades = ["sao Paulo", "rio de Janeiro"]
cidades.unshift("brasilia") 
for (let i = 0; i < cidades.length; i++) {
  console.log(cidades[i]) 
}


console.log("----------------")


let animais = ["cachorro", "gato", "coelho"]
animais.shift()
for (let i = 0; i < animais.length; i++) {
  console.log(animais[i])
}


console.log("----------------")


let carros = ["Ferrari", "Civic", "Lambo", "Gol Quadrado"]
console.log(carros.length)  


console.log("----------------")

let numero = []
numero.push(1,2,3) 
numero.unshift(4)
numero.pop() 
numero.shift() 
console.log(numero)
console.log(numero.length)