const prompt = require ("prompt-sync")();

const km = parseFloat(prompt("Informe um valor em KM: "))

const milhas = (km * 0.621371);

console.log(`O km em milhas fica: ${milhas}`);