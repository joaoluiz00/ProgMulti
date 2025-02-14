const prompt = require("prompt-sync")();

const base = parseFloat(prompt("Informe a base: "));
const expoente = parseFloat (prompt("Informe o expoente: "));

const resul = (base ** expoente);

console.log(`A base elevado ao expoente é: ${resul}`);