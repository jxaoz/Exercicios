const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número para calcular seu fatorial:"));

if (numero < 0) {
    console.log("Fatorial não está definido para números negativos.");
} else {
    let fatorial = 1;
    let i = 1;
    
    while (i <= numero) {
        fatorial *= i;
        i++;
    }
    
    console.log("O fatorial de " + numero + " é " + fatorial)
}