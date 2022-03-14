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

const primeiroElemento = (array) => array[0];
const primeiraLetra = (string) => string[0];
const letraMinuscula = (letra) => letra.toLowerCase();

//Passando via Arrow Function
new Promise(function (resolve) {
	resolve(["Ana", "Bia", "Carlos", "Daniel"]);
})
	.then(primeiroElemento)
	.then(primeiraLetra)
	.then(letraMinuscula)
	.then(console.log);
