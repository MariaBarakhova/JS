const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const livereload = require('gulp-livereload');
const gulpminifycss = require('gulp-minify-css');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

const config = {
server:{
    baseDir: './build'
},
host: 'localhost',
port: '9000',

};


gulp.task('webserver', function(){
    browserSync(config);
});

gulp.task ('html', function(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'))
    .pipe(reload({stream: true}))
});

gulp.task('css', function(){
    return gulp.src('css/main.css')
    .pipe(gulpminifycss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('css/'))
});

gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
    .pipe(plumber())
   .pipe (autoprefixer({
       browsers:['last 2 version'],
       casced: false,
   }))
    .pipe(sass())
    .pipe(gulp.dest('build/'))
});

gulp.task('watch', function(){
    gulp.watch('./src/**/*.html', ['html']);
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('css/main.css', ['css']);
});

gulp.task ('build', ['html'])
gulp.task('default', ['build', 'webserver', 'watch']);
