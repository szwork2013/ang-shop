var gulp = require('gulp');

var sass = require('gulp-ruby-sass');
var livereload = require('gulp-livereload');  

gulp.task('sass', function () {
    gulp.src('src/scss/*.scss')
        .pipe(sass({sourcemap: false}))
        .on('error',function(err){console.log(err.message);})
        .pipe(gulp.dest('src/css'))
});

gulp.task('watch',function(){
	livereload.listen();
	gulp.watch('src/css/*.css').on('change',livereload.changed);
});
gulp.watch('src/scss/*.scss',['sass']);

gulp.task('default', ['sass','watch']);