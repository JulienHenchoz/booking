let gulp = require('gulp');

// Include plugins
let sass = require('gulp-sass');
var webpack = require('webpack-stream');
var gutil = require('gulp-util');

let webpackSource = './src/FrontEndBundle/Resources/private/app/';
gulp.task('webpack', function() {
    let config = require('./web/webpack.config.js');
    return gulp.src(webpackSource + 'client.js')
        .pipe(webpack(config))
        .on('error', (err) => {
            this.emit('end');
        })
        .pipe(gulp.dest('./web/dist/'))

});

let scssSource = './src/FrontEndBundle/Resources/private/scss/*.scss';
gulp.task('sass', function () {
    return gulp.src(scssSource)
        .pipe(sass())
        .pipe(gulp.dest('./web/css/'));
});

gulp.task('watch', function () {
    gulp.watch(scssSource, ['sass']);
});
