var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gulprm = require('gulp-rm');
var runSequence = require('run-sequence');

gulp.task('buildJS', ['copyStaticResources'], function () {
  return browserify({entries: './src/js/app.js', extensions: ['.js'], debug: true})
    .transform(babelify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', ['build'], function () {
  gulp.watch(['*.js', '*.html', '*.css'], ['build']);
});

gulp.task('copyStaticResources', function () {
  gulp.src('./src/css/**/*')
    .pipe(gulp.dest('dist/css'));

  gulp.src('./src/js/**/*')
    .pipe(gulp.dest('dist/js'));

  gulp.src('./src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
  return gulp.src(['./dist/**']).pipe(gulprm());
});


gulp.task('default', (cb) => runSequence(['clean'], ['copyStaticResources', 'buildJS'], cb));


// TODO: copy static resources (css, html) into dist when building