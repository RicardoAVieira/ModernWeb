//coleção dinâmica de pares de chave/valor

const produto = new Object

//Notação Ponto
produto.nome = 'Cadeira'
//declaração com colchetes
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            rua: 'Venezuela',
            numero: 258
        }
    },
    condutores:[
        {
        nome: 'Junior',
        idade:19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        //...
    }

}

console.log(carro)
carro.proprietario.endereco.numero = 1000

console.log(carro)
carro['proprietario']['endereco']['rua']= "Rua de deus"

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)