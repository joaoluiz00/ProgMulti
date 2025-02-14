const prompt = require("prompt-sync")();

const largura = parseFloat(prompt('Informe a Largura do Retangulo: '));
const altura = parseFloat(prompt('Informa a altura do Retangulo: '));

const perimetro = 2 * (largura + altura);

console.log(`O perimetro do ratangulo é ${perimetro}`);