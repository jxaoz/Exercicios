const prompt = require('prompt-sync')();

let num = prompt('entre com um número: ')

if(num % 2 === 0){
    console.log('o numero é par')
}else{
    console.log('o número é impar')
}