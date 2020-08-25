const input = require("readline-sync");

console.log ( "-------------------------------------------")
console.log ("-----Calculadora de Medias de Notas---------")
console.log ( "-------------------------------------------")

const nome = input.question ('Digite o nome do aluno: ')

const nota1 = input.question ('Insira a primeira nota: ')
const nota2 = input.question ('Insira a segunda nota: ')
const nota3 = input.question ('Insira a terceira nota: ')
const nota4 = input.question ('Insira a quarta nota: ')
const nota5 = input.question ('Insira a quinta nota: ')
const nota6 = input.question ('Insira a sexta nota: ')

const media = (parseFloat(nota1) + parseFloat(nota2)+ parseFloat(nota3)+parseFloat(nota4)+parseFloat(nota5)+parseFloat(nota6)) /6
console.log ( nome + " sua media foi " + media.toFixed(2))

if (media >= 7){
    console.log ("Parabens!! Voce esta aprovado ")
} else if (media <5){
    console.log ("Infelizmente voce esta reprovado ")
} else {
    console.log ("Voce ainda tem uma chance!! Esta em recuperacao ")
}