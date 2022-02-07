//Armazenar função em variável

const imprimirSoma = function(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)

//Armazenando uma funcão arrow em uma variável

const soma = (a,b)=>{
    return a+b
}

console.log(soma(3,4))

//Arrow reduzida retorno inplicito

const subtracao =(a,b) => a-b

console.log(subtracao(6,5))

//Arrow com apenas um retorno

const imprimir2 = a => console.log(a)

imprimir2('Legal !!!!')

