//Arrow Function
const soma = (a,b) => a+b
console.log(soma(2,3))
const soma1 = (a,b) => a+b
console.log(soma(2,3))

//Arrow Function(this aponta pra local, em função normal para global)
const lexico1 =() => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

//parametro default
function log(texto = 'Node'){
    console.log(texto)
}
log()
log(null)
log('Sou mais forte que valor padrão')

//Operador Rest ou Spread
function total(...numeros){
    let total =0
    numeros.forEach(n => total += n)
    return total
}

//Parametros foram "espalhados" e a função juntou eles.
console.log(total(2,3,4,5))