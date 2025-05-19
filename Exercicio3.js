const prompt = require('prompt-sync')();

let nota = prompt('entre com sua nota: ')

if(nota <= 4.9){
    console.log('reprovado')
}else if((nota >= 5) && (nota <= 6.9)){
    console.log('recuperação')
}else{
    console.log('aprovado')
}
