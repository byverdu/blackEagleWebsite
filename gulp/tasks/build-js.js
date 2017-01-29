const gulp = require( 'gulp' );
const sourcemaps = require( 'gulp-sourcemaps' );
const rename = require( 'gulp-rename' );
const minify = require( 'gulp-uglify' );
const concat = require( 'gulp-concat' );
const paths = require( '../paths' );

gulp.task( 'js-minify', ['clean'], () => {
  gulp.src( paths.srcJs )
    .pipe( sourcemaps.init())
    .pipe( minify())
    .pipe(concat('scripts.js'))
    .pipe( rename({ suffix: '.min' }))
    .pipe( sourcemaps.write( '.' ))
    .pipe( gulp.dest( paths.destJs ));
});

gulp.task('move-lib', ['js-minify'], () => {
  gulp.src( paths.srcLib )
    .pipe(gulp.dest( paths.destLib ))
});

gulp.task('build-js', [
  'js-minify',
  'move-lib'
]);
