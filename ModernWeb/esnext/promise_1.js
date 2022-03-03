//Passando um Objeto
let p = new Promise(function (cumprirPromessa) {
	cumprirPromessa({
		x: 3,
		y: 4,
	});
});

p.then(function (valor) {
	console.log(valor.x, valor.y);
});

//Passando uma lista
let l = new Promise(function (cumprirPromessaLista) {
	cumprirPromessaLista(["Ana", "Bia", "Carlos", "Daniel"]);
});

l.then(function (valor) {
	console.log(valor);
});

//Passando via Arrow Function
let a = new Promise(function (cumprirPromessaArrow) {
	cumprirPromessaArrow(["Ana", "Bia", "Carlos", "Daniel"]);
});

function primeiroElemento(array){
    return array[0]
}

a.then((valor) => valor[0])
	.then((primeiroNome) => primeiroNome[0])
	.then((primeiraLetra) => primeiraLetra.toLowerCase())
	.then((letraMinuscula) => console.log(letraMinuscula));


