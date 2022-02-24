const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

//Exemplo que vai dar erro
console.log(tecnologias.react)
//Forma correta
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch)=>{
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

console.log(chavesVariadas.size)

//Ele aceita qualquer valor e tipo, porém sem repetição, quanto ao valor pode ser repetido.
chavesVariadas.set(123,'a')
chavesVariadas.set(123,'b')
chavesVariadas.set(456,'b')
console.log(chavesVariadas)

