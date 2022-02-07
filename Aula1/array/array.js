console.log(typeof Array, typeof new Array, typeof[])


//notação não recomendada de declarar um aray
let aprovados = new Array('Bia', 'Ana', 'Carlos')
console.log(aprovados)

// notação padrão e recomendada para declarar um array
aprovados = ['Bia','Carlos', 'Ana']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Abia')
console.log(aprovados)
console.log(aprovados.length)
aprovados[9]= 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8]=== undefined)
console.log(aprovados)

aprovados.sort()
console.log(aprovados)
delete aprovados[1]
console.log(aprovados)

//Splice consegue manipular determinado indice, ou seja apagar ou adicionar em um indice específico
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,2, 'Elemento1', 'Elemento2')
console.log(aprovados)