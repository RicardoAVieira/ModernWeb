console.log(module.exports)
console.log(module.exports === this)

console.log(module.exports === exports)

//Ambos estão visíveis fora do modulo
this.a = 1
exports.b =2
module.exports.c =3

exports = null

console.log(module.exports)

exports ={
    node: 'Teste'
}

console.log(module.exports)

module.exports ={publico: true}