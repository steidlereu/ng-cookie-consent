const { src, series, dest } = require("gulp");
const clean = require("gulp-clean");
const concat = require("gulp-concat");
const replace = require("gulp-replace");
const file = require("gulp-file");
const fs = require('fs');

function cleanTask() {
    return src(__dirname + '/output/', {read: false, allowEmpty: true})
        .pipe(clean());
}

function complileTask() {
  var path = __dirname + '/dist/ng-cookie-consent-webcom/';
  var deployPath = __dirname + '/output/components';

  var css = fs.readFileSync(path + 'styles.css', 'utf8');
  css = css.replace(/\r?\n|\r/g, " ");

  var js = `
    var style = document.createElement('style');
    style.innerHTML = '` + css + `';
    document.body.appendChild(style);
  `;

  return file('styles.js', js, { src: true })
    .pipe(dest(deployPath));
}

function webcomTask() {
    var path = __dirname + '/dist/ng-cookie-consent-webcom/';
    var deployPath = __dirname + '/output/components';

    return src([
        path + 'polyfills.js',
        path + 'runtime.js',
        path + 'main.js',
      ])
      .pipe(concat('ng-cookie-consent-webcom.js'))
      .pipe(dest(deployPath));
}

exports.default = series(cleanTask, complileTask);