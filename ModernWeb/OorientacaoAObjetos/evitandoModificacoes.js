//Object.preventExtensions
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


//object. seal (Selar - Não consegue adicionar o excluir atributos, mas consegue modificar valores)
const pessoa = { nome: 'Juliana', idade:35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))


pessoa.sobrenome = 'Silva'
console.log(pessoa)
delete pessoa.nome 
console.log(pessoa)
pessoa.idade = 29
console.log(pessoa)

//Objeto freeze = selado + objetos imutaveis.