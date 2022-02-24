//Operador sprad(...) rest(juntar)/ spread(espalhar)
//usar rest com parÂmetros de função

//usar spread com objeto
const funcionario ={nome: 'Maria', salario: 12348.99}
const clone = {ativo: true, ...funcionario}

console.log(funcionario,"\n\n", clone)

//usar spread com array
const grupoA =['João', 'Pedro', 'Gloria']
const grupoFinal =['Maria', ...grupoA, 'Rafaela']
console.log(grupoA,'\n\n\n',grupoFinal)

