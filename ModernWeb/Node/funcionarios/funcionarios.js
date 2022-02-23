//Json com funcionarios
const url ='http://files.cod3r.com.br/curso-js/funcionarios.json'
//axios um client HTTP
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario =(func, funcAtual)=>{
    return func.salario < funcAtual.salario ? func : funcAtual
}
const indones = f => f.pais === 'Indonesia'
const homen = f => f.genero ==='M'
const maiorSalario = (func,funcAtual)=>{
    return func.salario> funcAtual.salario ? func: funcAtual
}


axios.get(url).then(response=>{
    const funcionarios = response.data
   // console.log(funcionarios)

    //mulhere chinesa com menos salário
    const funcM = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)
    const funcH = funcionarios.filter(indones).filter(homen).reduce(maiorSalario)

    console.log(funcH)
    //console.log(funcM)
})


