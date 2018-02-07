const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const DIST_DIR = 'dist';
const DIST_ELECTRON_DIR = 'dist-electron';

module.exports = {
  appRoot: appDirectory,
  appSrc: resolveApp('src'),
  appDist: resolveApp(DIST_DIR),
  appTemplateHtmlPath: resolveApp('src/index.ejs'),
  appDistStylesRelative: 'css/styles.css',
  appDistRelative: DIST_DIR,
  appDistElectronRelative: DIST_ELECTRON_DIR,
  appPublicPath: '/',

  appElectronProdMain: resolveApp('electron/electron.prod.main.js'),
  appElectronPackageJson: resolveApp('electron/electron.package.json'),

  appSrcIndex: resolveApp('src/index.js'),

  appAliases: {
    common: resolveApp('src/common'),
    components: resolveApp('src/components'),
    public: resolveApp('src/public'),
  }
};
