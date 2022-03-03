//Promisse aceita apenas um parâmetro
// Ele realiza um processamento e depois de receber a resposta
// o paraâmetro é acessado com um then

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal Funcionou')
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))

//Exemplo com erro.
function falarDepoisDe2(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe2(3, 'Que Legal Funcionou')
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))
//Para tratar um erro usar o .chatch
.catch(e=> console.log(e))

