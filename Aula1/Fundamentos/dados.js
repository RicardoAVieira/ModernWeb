var quantidade = 10
var preco = 13.50
var precoFinal = preco*quantidade

console.log(quantidade)
console.log("R$"+preco+" Reais")
console.log("R$"+precoFinal)

let imposto = 10

console.log("Valor final da compra é R$"+(precoFinal+(precoFinal*imposto/100)))

console.log(typeof preco)