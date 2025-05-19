const prompt = require('prompt-sync')();

let opcao = prompt('escolha uma das opções 1/2/3: ')

switch(opcao){
    case '1':
        console.log('você escolheu a primeira opção')
        break
    case '2':
        console.log('você escolheu a segunda opção')  
        break
    case '3':
        console.log('você escolheu a terceira opção')   
        break  
    default:
        console.log('opção inválida')     
}
