const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número para ver sua tabuada (1 a 10):"));

if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else {
    console.log('Tabuada do ', numero);
    
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(numero, 'x', i = resultado);
    }
}