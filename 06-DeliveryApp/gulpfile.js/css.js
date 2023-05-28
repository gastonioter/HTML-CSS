const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');


function cssTranspiler(done) {
    src('./src/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()])) // autoprefixer: para soporte a los navegadores que yo quiera - cssnano: optimiza y minifica el codigo css
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./build/css'))
    done();
}


function cssMinimizer(done) {
    src('./src/scss/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(dest('./build/css'));

    done();
}

function cssWatcher() {
    watch('./src/scss/**/*.scss',
        { delay: 500 },
        cssTranspiler)
}


module.exports.cssTranspiler = cssTranspiler;
module.exports.cssWatcher = cssWatcher;
module.exports.cssMinimizer = cssMinimizer;

