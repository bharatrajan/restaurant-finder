var gulp        = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    port : 54444,
    livereload: true,
    root: './'
  });
});
