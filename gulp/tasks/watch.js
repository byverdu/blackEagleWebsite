const gulp = require( 'gulp' );
const paths = require( '../paths' );
const reload = require( 'browser-sync' ).reload;

// outputs changes to files to the console
function reportChange( event ) {
  console.log( `File ${event.path} was ${event.type} \nrunning tasks...` );
}

gulp.task( 'watch', () => {
  gulp.watch( paths.srcJs, [ 'build', reload ]).on( 'change', reportChange );
  gulp.watch( paths.srcCss, [ 'build', reload ]).on( 'change', reportChange );
  gulp.watch( './src/handlebars/**', [ 'build', reload ]).on( 'change', reportChange );
});
