const pessoa ={
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e=>{
    console.log(`${e[0]}: ${e[1]}`)
})

//Destruturing, desestrutura um array, faz a mesma coisa mas mais organizado e visível.
Object.entries(pessoa).forEach(([chave, valor])=>{
    console.log(`${chave}: ${valor}`)
})

//A criação desta forma, acaba deixando o parâmetro neste caso como o freeze congelado.
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

console.log(pessoa.dataNascimento)
pessoa.dataNascimento = '02/02/2020'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))


//Object.assingn(ECMAScript 2015)
const dest={a:1}
const o1 = {b:2}
const o2 = {c3:4, a:4}
const obj = Object.assign(dest, o1, o2) //Ele pega todos os objetos passados depois do primeiro e concatena dentro do primeiro.


//congela um objeto inpedindo sua modificação
Object.freeze(obj) 
