//PI * raio* raio

const PI = 3.141592;
let raio = 10;
let resultado;
let resultado2;
resultado = (PI*(raio*raio));
resultado2 = (Math.PI*(raio*raio));

console.log("O resultado da área é: "+ resultado+"M²");
console.log("O resultado da área é: "+ resultado2+"M²");


//Desafio Troca.js
//Trocar os valores das variáveis entre 1 e outro
console.log("\n\n\n");

let a = 7;
let b = 94;
let aux;


console.log("Valor de A:"+a+" Valor de B:"+b);

aux = a;
a = b;
b = aux;

console.log("Valor de A:"+a+" Valor de B:"+b);