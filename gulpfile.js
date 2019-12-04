let gulp = require('gulp');
let sass = require('gulp-sass');
let cssbeautify = require('gulp-cssbeautify');

gulp.task('sass', () => {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(cssbeautify())
        .pipe(gulp.dest('app/css'));
});
gulp.task('watch', () => { gulp.watch('app/scss/**/*.scss', gulp. series('sass'));
});