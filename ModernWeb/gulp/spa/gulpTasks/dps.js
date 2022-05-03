const gulp = require("gulp");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");

function depsCSS() {
	return gulp
		.src("node_modules/font-awesome/css/font-awesome.css")
		.pipe(uglifycss({ uglyComments: false }))
		.pipe(concat("deps.min.js"))
		.pipe(gulp.dest("build/assets/css"));
}
function depsFontes(cb) {
	return gulp
		.src("node_modules/font-awesome/fonts/*.*")
		.pipe(gulp.dest("build/assets/fonts"));
}
module.exports = {
	depsCSS,
	depsFontes,
};