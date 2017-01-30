// Paths used for the gulp tasks
const srcDir = './src';
const destDir = './dist';

module.exports = {
  cleanDir: destDir,
  srcJs: `${srcDir}/js/*.js`,
  destJs: `${destDir}/js`,
  srcLib: `${srcDir}/lib/*`,
  destLib: `${destDir}/js/lib/`,
  srcCss: `${srcDir}/css/*.css`,
  destCss: `${destDir}/css/`,
  srcImg: `${srcDir}/images/*`,
  destImg: `${destDir}/images/`,
  srcFonts: `${srcDir}/fonts/**/`,
  destFonts: `${destDir}/fonts/`,
  srcPartials: `${srcDir}/handlebars/partials`,
  srcIndexHbs: `${srcDir}/handlebars/index.handlebars`,
  srcContactHbs: `${srcDir}/handlebars/contact.handlebars`,
  srcSuccessHbs: `${srcDir}/handlebars/success.handlebars`,
  srcPHP: `${srcDir}/sendEmail.php`,
  srcServe: destDir,
  destDir: destDir,
};
