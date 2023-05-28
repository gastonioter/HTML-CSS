const { src, dest, watch } = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function imagesWebpFormatter(done) {

    const opciones = {
        quality: 50
    };

    src('./src/img/**/*{jpg,png}')
        .pipe(webp(opciones))
        .pipe(dest('./build/img'));

    done();
}


function imagesAvifFormatter(done) {

    const opciones = {
        quality: 50
    };

    src('./src/img/**/*{jpg,png}')
        .pipe(avif(opciones))
        .pipe(dest('./build/img'));

    done();
}


function imagesOptimizator(done) {
    src('./src/img/**/*')
        .pipe(imagemin({ optimizaitonLevel: 3 }))
        .pipe(dest('./build/img'))
    done();
}

function imagesWatcher() {
    watch('./src/img/**/*', imagesOptimizator)
}

module.exports.imagesOptimizator = imagesOptimizator;
module.exports.imagesWatcher = imagesWatcher;
module.exports.imagesWebpFormatter = imagesWebpFormatter;
module.exports.imagesAvifFormatter = imagesAvifFormatter;