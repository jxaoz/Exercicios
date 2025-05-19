const prompt = require('prompt-sync')();

let peso = prompt('entre com seu peso: ')
let altura = prompt('entre com sua altura: ')

let imc = peso / (altura ** 2)

console.log('seu imc: ', imc)

if(imc < 18.5){
    console.log('abaixo do peso')
}else if(imc >= 18.5 && imc <=24.9){
    console.log('peso normal')
}else if(imc >= 25 && imc <= 29.9){
    console.log('Sobrepeso')
}else if(imc >=30 && imc <= 34.9){
    console.log('Obesidade grau I')
}else if(imc >=35 && imc <= 39.9){
    console.log('Obesidade grau II')
}else{
    console.log('Obesidade grau III')
}