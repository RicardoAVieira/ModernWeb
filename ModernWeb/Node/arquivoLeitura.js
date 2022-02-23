const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//Sincrono... Cuidado com arquivos grandes
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


//Leitura assincrona, essa é mais interessante.
fs.readFile(caminho,'utf-8',(err, conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Para Json existe uma forma muito mais simples de abrir o arquivo
const  config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname,(err, arquivos)=>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})