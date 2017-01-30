const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const paths = require( '../paths' );
import * as content from '../htmlContent'

const options = {
  ignorePartials: true,
  batch : [paths.srcPartials]
};

gulp.task('compile-index', ['clean'], () => {
  const templateData = {
    boxContent: content.safeString(
      content.indexBoxHtml
    )
  };

  return gulp.src( paths.srcIndexHbs )
      .pipe(handlebars( templateData, options ))
      .pipe(rename('index.html'))
      .pipe(gulp.dest( paths.destDir ));
});

gulp.task('compile-contact', ['clean'], () => {
  const templateData = {
    boxContent: content.safeString(
      content.contactBoxHtml
    )
  };

  return gulp.src( paths.srcContactHbs )
      .pipe(handlebars( templateData, options ))
      .pipe(rename('contact.html'))
      .pipe(gulp.dest( paths.destDir ));
});

gulp.task('compile-success', ['clean'], () => {
  const templateData = {
    boxContent: content.safeString(
      content.successBoxHtml
    )
  };

  return gulp.src( paths.srcSuccessHbs )
      .pipe(handlebars( templateData, options ))
      .pipe(rename('success.html'))
      .pipe(gulp.dest( paths.destDir ));
});

gulp.task('move-php', ['clean'], () => {
  gulp.src( paths.srcPHP)
  .pipe(gulp.dest( paths.destDir ));
});

gulp.task( 'build-html', [
  'compile-index',
  'compile-contact',
  'compile-success',
  'move-php'
]);
