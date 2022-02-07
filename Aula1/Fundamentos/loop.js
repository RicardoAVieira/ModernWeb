//Loop simples
for(var i=0; i<10; i++){
    console.log(" Numero de I:" + i)
}
console.log("Valor final de I foi: "+i)


for(let j=0; j<10; j++){
    console.log("Numero de J:" + j)
}

//Armazenando funções anonimas em um array com loop e var
var funcsV = []

for(var i2 = 0; i2<10; i2++){
    funcsV.push(function(){
        console.log(i2)
    })
}

funcsV[2]() 

//Armazenando funções anonimas em um array com loop e let
const funcsL= []

for (let i3=0; i3<10; i3++){
    funcsL.push(function(){
        console.log(i3)
    })
}

funcsL[2]()
funcsL[3]()