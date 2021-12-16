const { src, series } = require("gulp");
const clean = require("gulp-clean");
const concat = require("gulp-concat");
const replace = require("gulp-replace");

function cleanTask() {
    return src('output/', {read: false, allowEmpty: ture})
        .pipe(clean());
}

function webcomTask() {
    var path = 'dist/ng-cookie-consent-webcom/';
    var deployPath = 'output/components';

    return src([
        path + 'polyfills.js',
        path + 'styles.js',
        path + 'runtime.js',
        path + 'main.js',
      ], {allowEmpty: true})
        .pipe(concat('ng-cookie-consent-webcom.js'))
        .pipe(dest(deployPath));
}

exports.default = series(cleanTask, webcomTask);