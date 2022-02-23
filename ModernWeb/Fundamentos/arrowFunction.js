// simples
let dobro =  function(a){
    return 2*a
}

//Arrow simples
dobro= (a)=>{
    return 2*a
}
//Arrow reduzida
dobro = a=> 2 * a //Return Implícito

console.log(dobro(Math.PI))

ola = () => "olá"
olar = _ => "Olá Resumido"
console.log(ola())
console.log(olar())