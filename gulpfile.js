const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('browser-sync',() => {
    browserSync.init({
        server : {
            baseDir : './'
        }
    });
    gulp.watch("./sass/**/*.scss", ['sass']);
    gulp.watch('./scripts/**/*.js').on('change',browserSync.reload);
});

gulp.task('sass', () => {
    return gulp.src("./sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('default',['browser-sync']);