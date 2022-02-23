const a = 1
const b = 2
const c = 3

//delcaração de constante antiga
const obj1 = {a:a, b:b, c:c}

//Forma normal moderna
const obj2 = {a,b,c}
console.log(obj1)
console.log(obj2)


const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = {[nomeAttr]: valorAttr}
console.log(obj3)

const obj4 = {[nomeAttr]:valorAttr}
console.log(obj4)


//Declarando função antiga com a palavra reservada e hoje sem a palavra
const obj5 = {
    funcao1: function(){
        //...
    },
    funcao2(){
        //...
    }
}
console.log(obj5)