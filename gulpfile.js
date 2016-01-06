var gulp = require('gulp');
var	browserify = require('browserify');
var	reactify = require('reactify');
var	through2 = require('through2');
var	concat = require('gulp-concat');
var	plumber = require('gulp-plumber');

gulp.task('browserify', function () {
	gulp.src('./src/main.js')
	.pipe(plumber())
    .pipe(through2.obj(function (file, enc, next){
        browserify(file.path, {'debug': true})
        .transform('reactify')
        .bundle(function(err, res){
            file.contents = res;
            next(null, file);
        });
    }))
	.pipe(concat('main.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['browserify']);

gulp.task('watch', function(){
	gulp.watch('src/**/*.*', ['default']);
});