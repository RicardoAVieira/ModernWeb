//estrategia 1 para gerar valor padão

function soma1(a,b,c){
    a = a||1
    b = b||1
    c = c||1

    return a+b+c
}

console.log(soma1(), soma1(3), console.log(0,0,0)) //Passando zero vai dar bug

//estrategia alternativa

function soma2(a,b,c){
    a = a !==undefined ? a:1 //Se a diferete de undefined
    b = 1 in arguments ? b : 1 //Se existe um valor no campo dois de arguments, pegue ele, se não pegue 1.
    c = isNaN(c) ? 1:c //
    return a+b+c
}
console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))


//Forma correta de utilização de parametro padrão
function soma3(a=1, b=1, c=3){
    return a+b+c
}
console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))