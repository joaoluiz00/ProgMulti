const prompt = require('prompt-sync')();

const dias = parseFloat(prompt("Informe a quantidade de dias: "));

horas = (dias * 24);
minutos = horas * 60;
segundos = minutos * 60 ;


console.log(`seus dias em hora ${horas}`);
console.log(`seus dias em minutos  ${minutos}`);
console.log(`seu dia em segundos ${segundos}`);

