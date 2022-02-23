/* 
metodo antigo para delarar objeto, ineficiente, acaba gerando muito trabalho
const prod1 ={
    nome : 'secador',
    preco : 70
}
const prod2 ={
    nome : 'escova',
    preco : 40
} */

//Metodo utilizando factorry
function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome:'Silva'
    }
}

console.log(criarPessoa())

//Função criar produto, que retorna um objeto a partir de dados fornecidos

function criarProduto( nome, preco){
            let nomep = nome
            let precop = preco
            let desconto = 0.05
    return{
        nome: nomep,
        preco: precop-(precop*desconto),
    }
}
console.log(criarProduto("Abacate", 15.30))

//versão do professor
function criarProdutoP(nome,preco){
    return{
        nome,
        preco,
        desconto:0.1
    }
}
console.log(criarProdutoP('Notebook', 2199.49))
console.log(criarProdutoP('Tablet', 1199.49))