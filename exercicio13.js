const prompt = require('prompt-sync')();

let soma = 0;
let quantidade = 0;

console.log("Digite números decimais (digite 0 para calcular a média):");

while (true) {
    const entrada = prompt("Digite um número (0 para encerrar): ");
    const numero = parseFloat(entrada);

    if (numero === 0) {
        break;
    }

    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
        continue;
    }

    soma += numero;
    quantidade++;
}

if (quantidade > 0) {
    const media = soma / quantidade;
    console.log('media aritmetica:', media);
} else {
    console.log("Nenhum número foi digitado para calcular a média.");
}