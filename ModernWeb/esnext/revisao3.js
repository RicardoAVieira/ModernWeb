//ES8: Object.values/Object.entries

const obj = {a:1, b: 2, c:3}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhoria na Notação Literal
const nome ='Carla \n'
const pessoa ={
    nome,
    ola(){
        return 'Função declarada mais simples'
    }
}
console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'Au Au!'
    }
}

console.log(new Cachorro().falar())
