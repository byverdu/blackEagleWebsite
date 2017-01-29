const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const paths = require( '../paths' );
const htmlContent = require( '../htmlContent' );

gulp.task('compile-index', ['clean'], () => {
  const templateData = {};
  const options = {
      ignorePartials: true,
      batch : [paths.srcPartials],
      partials: {
        boxContent: htmlContent.indexBoxContent
      }
  };

    return gulp.src( paths.srcIndexHbs )
        .pipe(handlebars( templateData, options ))
        .pipe(rename('index.html'))
        .pipe(gulp.dest( paths.destDir ));
});

gulp.task( 'build-html', [
  'compile-index'
]);
