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
  srcServe: destDir
};

// module.exports = {
//   srcJs: `${srcDir}/js/*.js`,
//   destJs: `${destDir}/js`,
//   srcLib: `${srcDir}/lib/*`,
//   destLib: `${srcDir}/lib/*`,
//   destCss: destDir,
//   srcSass: `${srcDir}/styles.scss`,
//   destSass: destDir,
//   srcCss: `${destDir}/styles.css`,
//   cleanDir: destDir,
//   srcHtml: 'index.html',
//   destHtml: destDir,
//   srcServe: destDir,
// };
