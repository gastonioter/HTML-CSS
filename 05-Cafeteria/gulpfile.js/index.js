const { series, parallel } = require('gulp');
const { cssTranspiler, cssWatcher, cssMinimizer } = require('./css');
const { imagesAdder, imagesWatcher, imagesWebpFormatter, imagesAvifFormatter } = require('./images');



// pubic tasks
exports.cssTranspiler = cssTranspiler;
exports.cssWatcher = cssWatcher;
exports.cssMinimizer = cssMinimizer;

exports.default = series(
    imagesAdder,
    parallel(imagesWebpFormatter, imagesAvifFormatter),
    cssTranspiler,
    parallel(imagesWatcher, cssWatcher));


