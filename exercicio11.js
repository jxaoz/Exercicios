const prompt = require("prompt-sync")();

let soma = 0;

for (let i = 1; i <= 5; i++) {
    let numero;
    while (isNaN(numero = Number(prompt("Digite o "  + i + "º número:")))) {
        alert("Por favor, digite um número válido!");
    }
    soma += numero;
}

console.log("Soma total: " + soma);