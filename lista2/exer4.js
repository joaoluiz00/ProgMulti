const prompt = require('prompt-sync')();

const frase = prompt("Digite uma frase: ").trim();
const quantidadePalavras = frase === "" ? 0 : frase.split(/\s+/).length;

console.log(`Quantidade de palavras: ${quantidadePalavras}`);