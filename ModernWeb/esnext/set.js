//Não aceita repetição/Não indexada

const { time } = require("console")

const times = new Set()

times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthias')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

//Criando uma matriz com set

const nomes = ['Raquel', 'Lucas', 'Julia','Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)