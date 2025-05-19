const prompt = require('prompt-sync')();

let ladoA = Number(prompt('entre com o primeiro lado: '))
let ladoB = Number(prompt('entre com o segundo lado: '))
let ladoC = Number(prompt('entre com o terceiro lado: '))

if((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)){
    if((ladoA === ladoB) && (ladoB === ladoC)){
        console.log('Triângulo equilátero')
    }else if((ladoA != ladoB ) && (ladoB !=ladoC)){
        console.log('Triângulo escaleno')
    }else if((ladoA === ladoB) || (ladoA === ladoC) || (ladoB == ladoC)){
        console.log('Triângulo isósceles')
    }
}else{
    console.log('não forma um triângulo')
}
