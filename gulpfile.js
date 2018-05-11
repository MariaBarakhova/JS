const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const gulpminifycss = require('gulp-minify-css');



gulp.task('css', function(){
    return gulp.src('css/main.css')
    .pipe(gulpminifycss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('css/'))
});

gulp.task('sass', function() {
    return gulp.src('sass/**/*.scss')
    .pipe(plumber())
   .pipe (autoprefixer({
       browsers:['last 2 version'],
       casced: false,
   }))
    .pipe(sass())
    .pipe(gulp.dest('css/'))
});

gulp.task('watch', function(){
gulp.watch('sass/**/*.scss', ['sass']);
gulp.watch('css/main.css', ['css']);
});
