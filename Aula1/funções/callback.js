const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}
fabricantes.forEach(imprimir)
//função normal
fabricantes.forEach(function(fabricante){console.log(fabricante)})
//Mesma função só que arrow
fabricantes.forEach(fabricantes2 =>console.log(fabricantes2))

