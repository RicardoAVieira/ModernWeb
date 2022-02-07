//Função simples e literal
function fun1( ){ }

//Armazenar em uma variável
const fun2 = function(){ }

//armazenar em um array
const array =[function(a,b){return a+b}, fun1, fun2]

//armazenar em um atributo de objeto
const obj ={}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

//passar função como parametro
function run(fun){
    console.log("\nDentro de Run:")
    fun()
}

run(function(){console.log('Executando....')})

//Uma função pode retornar/Conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
//Executando normal, e passando um segundo parenteses para executar a função que é retorno da primeira
soma(3,3)(3)
//possibilidade de uso
const cincoMais = soma(2,3)
cincoMais(4)