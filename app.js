console.log("Olá mundo!");

let nome= "João";
console.log(nome);

nome = "Maria"
console.log(nome);

const valor = 10;
console.log(valor);


let total = 5 + parseInt("5");
console.log(`O valor é ${total}`);


let nota = 7.5;
    if (nota >= 9){
        console.log('Excelente!');
    }
    else if(nota >=7){
        console.log('Bom!');
    }
    else{
        console.log('Vamos estudar!');
    }


let diaSemana = 1;
switch (diaSemana){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    default:
        console.log("Dia inválido!");
    
}


 for (let i=0; i<5; i++){
     console.log("Laço FOR: "+i);
 }

let contador1 = 0;
while (contador1 < 5){
    console.log(`Laço WHILE: ${contador1}`);
    contador1++;
}

let contador2 = 0;
    do {
        console.log("Laço do WHILE: "+contador2);
        contador2++;
    }while (contador2 <5);


function somar (a,b){
    return a + b;
}

const soma = (a,b) => a + b;
console.log(soma(3,4));


const prompt = require('prompt-sync')();
nome = prompt ("DIgite o seu nome");
let idade = prompt("Digite a sua idade");

console.log(`Nome : ${nome} - Idade: ${idade}`);