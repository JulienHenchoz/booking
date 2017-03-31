let gulp = require('gulp');

// Include plugins
let sass = require('gulp-sass');
var webpack = require('webpack-stream');


let webpackSource = './src/FrontEndBundle/Resources/private/app/';
gulp.task('webpack', function() {
    return gulp.src(webpackSource + 'client.js')
        .pipe(webpack( require('./web/webpack.config.js') ))
        .pipe(gulp.dest('./web/dist/'));
});

let scssSource = './src/FrontEndBundle/Resources/private/scss/*.scss';
gulp.task('sass', function () {
    return gulp.src(scssSource)
        .pipe(sass())
        .pipe(gulp.dest('./web/css/'));
});

let materializeSource = './web/bower_components/materialize/sass/**/*.scss';
gulp.task('materialize', function () {
    return gulp.src(materializeSource)
        .pipe(sass())
        .pipe(gulp.dest('./web/bower_components/materialize/dist/css/'));
});

gulp.task('watch', function () {
    gulp.watch('./web/bower_components/materialize/sass/**/*.scss', ['materialize']);
    gulp.watch(scssSource, ['sass']);
});
