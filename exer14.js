const prompt = require('prompt-sync')();

const capital = parseFloat(prompt("Informe o Capital: "));
const taxa = parseFloat(prompt("Informe a Taxa: "));
const periodo = parseFloat(prompt("Informe o Periodo: "));

jurosC = (capital * (1 + taxa) ** periodo);


console.log(` O resultado com final é ${jurosC}`);