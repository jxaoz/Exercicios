const prompt = require('prompt-sync')();

let idade = prompt('entre com sua idade: ')

if((idade >=1) && (idade <= 13)){
    console.log('criança')
}else if((idade >13) && (idade <18)){
    console.log('adolescente')
}else if((idade >=18) && (idade <=50)){
    console.log('adulto')
}else{
    console.log('idoso')
}