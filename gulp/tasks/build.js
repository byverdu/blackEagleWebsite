import gulp from 'gulp';

gulp.task( 'build', [
  'clean',
  'build-js',
  'build-css',
  'build-html'
]);
