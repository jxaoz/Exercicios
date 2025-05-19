const prompt = require('prompt-sync')()

let tot = 0

let qtd = Number(prompt('quantas maçãs deseja comprar: '))

if(qtd < 12){
    tot = qtd * 0.30
}else{
    tot = qtd * 0.25
}

console.log('total a pagar: ', tot)
