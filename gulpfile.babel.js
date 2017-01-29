import gulp from 'gulp';
require( 'require-dir' )( './gulp/tasks' );

gulp.task('default', ['serve', 'watch'], () => {
  console.log('gulp tasks done!');
});
