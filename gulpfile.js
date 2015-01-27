var gulp = require('gulp'),
    minify = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps')
    rename = require('gulp-rename');

// minifies and creates source maps
gulp.task('minify-css', function() {
  gulp.src('./src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(minify())
    .pipe(sourcemaps.write('.'))
    .pipe(rename('rework-visibility.min.css'))
    .pipe(gulp.dest('./dist/css'))
});

// creates source maps
gulp.task('css', function() {
  gulp.src('./src/css/*.css')
    .pipe(gulp.dest('./dist/css'))
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('./src/css/*.css', ['css', 'minify-css']);
});

gulp.task('default', ['css', 'minify-css']);
