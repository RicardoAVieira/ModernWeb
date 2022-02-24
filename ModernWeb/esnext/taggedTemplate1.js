//Tagged templates - processa o template dentro de uma função, ou seja,
//Ele executou os parametros dentro da função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra String'
}

const aluno ='Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)