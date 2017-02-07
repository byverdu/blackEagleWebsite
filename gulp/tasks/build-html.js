const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const paths = require( '../paths' );
import * as content from '../htmlContent'

const options = {
  ignorePartials: true,
  batch : [paths.srcPartials]
};

// index.html
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

// contact.html
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

// about.html
gulp.task('compile-about', ['clean'], () => {
  const templateData = {
    boxContent: content.safeString(
      content.aboutBoxHtml
    )
  };

  return gulp.src( paths.srcAboutHbs )
      .pipe(handlebars( templateData, options ))
      .pipe(rename('about.html'))
      .pipe(gulp.dest( paths.destDir ));
});

// close-protection.html
gulp.task('compile-close-protection', ['clean'], () => {
  const templateData = {
    boxContent: content.safeString(
      content.closeBoxHtml
    )
  };

  return gulp.src( paths.srcCloseHbs )
      .pipe(handlebars( templateData, options ))
      .pipe(rename('close-protection.html'))
      .pipe(gulp.dest( paths.destDir ));
});

// cctv-monitoring.html
gulp.task('compile-cctv', ['clean'], () => {
  const templateData = {
    boxContent: content.safeString(
      content.monitorBoxHtml
    )
  };

  return gulp.src( paths.srcMonitorHbs )
      .pipe(handlebars( templateData, options ))
      .pipe(rename('cctv-monitoring.html'))
      .pipe(gulp.dest( paths.destDir ));
});

// private.html
gulp.task('compile-private', ['clean'], () => {
  const templateData = {
    boxContent: content.safeString(
      content.privateBoxHtml
    )
  };

  return gulp.src( paths.srcPrivateHbs )
      .pipe(handlebars( templateData, options ))
      .pipe(rename('private-investigations.html'))
      .pipe(gulp.dest( paths.destDir ));
});

// success message when sending email
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
  'compile-about',
  'compile-close-protection',
  'compile-cctv',
  'compile-private',
  'compile-success',
  'move-php'
]);
