const path = require('path');
const blacklist = require('metro/src/blacklist');
const cwd = path.resolve(__dirname);

function getRoots() {
  return [
    cwd, // current directory
    path.resolve(cwd, "../..")
  ];
}

module.exports = {
  extraNodeModules: {

  },
  getBlacklistRE: () =>
    blacklist([

    ]),
  getProjectRoots() {
    return getRoots();
  },
  getAssetRoots() {
    return getRoots();
  }
};
