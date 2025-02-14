const prompt = require("prompt-sync")();

const Fahrenheit = parseFloat(prompt('Informe a temperada Fahrenheit: '));

const Celsius = (Fahrenheit  - 32) / 1.8;

console.log(`O Fahrenheitº ${Fahrenheit} convertido em Celsius fica: ${Celsius}`);