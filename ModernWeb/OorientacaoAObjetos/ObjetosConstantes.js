//pessoa -> 123 -> {...}

const pessoa = {nome:'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa <- 456 -> {...}
//pessoa = {nome: 'Ana'}
//É Quando criamos um objeto constante, podemos alterar os itens dentro do objeto mas não trocar o objeto conforeme exemplo assima.


//Congelamento do objeto, depois isso ele não aceita mais modificações.
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa.nome)


//Criação de objeto imuitavel constante
const pessoaConstante = Object.freeze({nome:'Joao'})
console.log(pessoaConstante)
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)