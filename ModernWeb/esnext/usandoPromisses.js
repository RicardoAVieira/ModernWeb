//Com promise...

//Formatar com shift + Alt + f

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

//Promisse de forma "Feia"
/* let nomes = [];
getTurma("A").then((alunos) => {
	nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
	getTurma("B").then((alunos) => {
		nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
		getTurma("C").then((alunos) => {
			nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
			console.log(nomes);
		});
	});
});
 */
//Faz a mesma coisa do que em cima só que correto.
Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
	.then((turmas) => [].concat(...turmas))
	.then((alunos) => alunos.map((aluno) => aluno.nome))
	.then((nomes) => console.log(nomes))
	.catch((e) => console.log(e.message));

//Teste com erro de uma lista que não existe
getTurma("D").catch((e) => console.log(e.message));
