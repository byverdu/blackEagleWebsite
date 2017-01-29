const gulp = require( 'gulp' );
const paths = require( '../paths' );
const reload = require( 'browser-sync' ).reload;

// outputs changes to files to the console
function reportChange( event ) {
  console.log( `File ${event.path} was ${event.type} \nrunning tasks...` );
}

gulp.task( 'watch', () => {
  gulp.watch( paths.srcJs, [ 'build-js', reload ]).on( 'change', reportChange );
  gulp.watch( paths.srcCss, [ 'build-css', reload ]).on( 'change', reportChange );
});
