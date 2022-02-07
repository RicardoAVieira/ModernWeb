const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro e esta fora(Ultimo Elemento removido.)
console.log(pilotos)


pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona o piloto na primeira posição
console.log(pilotos)

//splice pode tanto adicioar quanto remover

//Adicionando
pilotos.splice(2,0, 'Bottas','Massa')
console.log(pilotos)

//Remover
pilotos.splice(3, 1) //Massa Quebrou Novamente
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)