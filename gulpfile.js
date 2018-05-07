const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('sass/'))
});

gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
});