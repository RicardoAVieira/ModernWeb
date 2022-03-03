//com Promisse...
const http = require("http");

const getTurma = (letra) => {
	const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
	return new Promise((resolve, reject) => {
		http.get(url, (res) => {
			let resultado = "";
			res.on("data", (dados) => {
				resultado += dados;
			});

			res.on("end", () => {
				try {
					resolve(JSON.parse(resultado));
				} catch (e) {
					reject(e);
				}
			});
		});
	});
};

//Recurso do ES8
//Objetivo de simplificar o uso de promisses...

/* 
Primeiro passo é criar uma função e marcar ela com a palavra ({async})
Feito isso podemos adicionar um passo chamado ({await}), ou seja, ele
vai esperar ele confluir para avanssar para o proximo passo.
 */

let obterAlunos = async () => {
	const turmaA = await getTurma("A");
	const turmaB = await getTurma("B");
	const turmaC = await getTurma("C");
	return [].concat(turmaA, turmaB, turmaC);
}; //Por mais que esteja retornando um array, em ({async}) o retorno madrão é um ({AsyncFunction})

obterAlunos()
	.then((alunos) => alunos.map((a) => a.nome))
	.then((nomes) => console.log(nomes));
