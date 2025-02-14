const prompt = require("prompt-sync")();

const celsius = parseFloat(prompt('Informe a temperada Celsius: '));

const Fahrenheit = (celsius * 1.8  + 32);

console.log(`O Celsiusº${celsius} convertido em fahrenheit fica: ${Fahrenheit}`);