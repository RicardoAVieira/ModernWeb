//função sem retorno

function semRetornno(a, b){
    console.log(a+b)
}

semRetornno(10,20)

function comRetorno(a,b=2){
    return(a+b)
}
let c = comRetorno(10,12)
console.log(c)

console.log(comRetorno(10))