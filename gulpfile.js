var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port: 7001,
    host: '0.0.0.0'
  });
});