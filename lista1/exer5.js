const prompt = require ("prompt-sync")();

const raio = parseFloat(prompt('Informe o raio do circulo: '));

const raios = (raio * raio);
const area = (3.14 * raios);

console.log(`A area do circulo é ${area}`);