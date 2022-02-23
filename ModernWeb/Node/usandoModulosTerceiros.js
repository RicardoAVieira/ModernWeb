const _ = require('lodash')

setInterval(()=> console.log(_.random(100,1000)), 2000)

//NodeMon é uma dependencia que roda o arquivo no terminal e fica escutando por alterações no codigo.