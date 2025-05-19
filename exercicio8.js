const prompt = require("prompt-sync")();

let num1 = Number(prompt('90'))
let num2 = Number(prompt('75'))

if(num1>num2){
    console.log(num2, ' ', num1)
}else{
    console.log(num1 , ' ', num2)

}