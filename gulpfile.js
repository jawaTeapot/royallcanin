const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const ejs = require("gulp-ejs");
const rename = require('gulp-rename');

function buildStyles() {
    return gulp.src('./scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

function buildImages() {
    return gulp.src('./img/**/*.*')
        .pipe(gulp.dest('./dist/img'));
}

function buildFonts() {
    return gulp.src('./fonts/**/*.*')
        .pipe(gulp.dest('./dist/fonts'));
}

function buildEjs() {
    return gulp.src("./templates/*.ejs")
        .pipe(ejs({
            msg: "Hello Gulp!"
        }))
        .pipe(rename({ extname: '.html' }))
        .on('error', console.log)
        .pipe(gulp.dest("./dist"))
}

exports.default = buildStyles;
exports.watch = function() {
    gulp.watch(['./scss/**/*.scss', './templates/**/*.ejs', './img/**/*.*'], gulp.series(buildStyles, buildEjs, buildImages, buildFonts));
};