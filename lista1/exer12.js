const prompt = require('prompt-sync')();

const preco = parseFloat(prompt("Informe o preço: "))
const desconto = parseFloat(prompt("Informe um percentual de desconto: "))

const result = preco * (1 - desconto / 100)

console.log(`O preco ficou : ${result} com o desconto`);