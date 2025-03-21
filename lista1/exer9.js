const prompt = require("prompt-sync")();

const metros = parseFloat(prompt("Informe o valor em metros: "));

const cm = metros * 100;

console.log(`O Valor inserido em metros(${metros}) fica ${cm}  em centimetros`)