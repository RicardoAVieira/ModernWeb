const gulp = require("gulp");
const { series, parallel } = require("gulp");


const antes1 = (cb) => {
	console.log("Tarefa antes 1!");
	return cb();
};
const antes2 = (cb) => {
	console.log("Tarefa antes 2!");
	return cb();
};

function copiar(cb) {
	/* 
    Comando para transferir arquivos manualmente
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) */

    /* Comando para selecionar todos os arquivos .txt */
    gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'))
    /* 
    Podem ser encadeados diversas chamadas do pipe
    .pipe(imagemPelaMetade())
    .pipe(imagemEmPretoEBrando()) */
	return cb();
}
const fim = (cb) => {
	console.log("Tarefa Final!");
	return cb();
};

module.exports.default = series(
    parallel(antes1, antes2), 
    copiar, 
    fim
    );
