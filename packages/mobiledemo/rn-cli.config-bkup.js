const getConfig = require('metro-bundler-config-yarn-workspaces');
const path = require("path");
module.exports = getConfig(__dirname, {
  nodeModules: path.join(__dirname, "../..")
})




const path = require('path');
const getConfig = require('metro-bundler-config-yarn-workspaces')
const blacklist = require('metro/src/blacklist');

module.exports = {
  extraNodeModules: {

  },
  nodeModules: path.resolve(__dirname, '..', '..'),
  getBlacklistRE: () =>
    blacklist([

    ]),
  getProjectRoots: () => [
    // Include current package as project root
    path.resolve(__dirname),
    // Include symlinked packages as project roots
    path.join(__dirname, "../.."),
  ],
};



const path = require('path');
const getConfig = require('metro-bundler-config-yarn-workspaces')
const blacklist = require('metro/src/blacklist');

module.exports = {
  extraNodeModules: {

  },
  nodeModules: path.resolve(__dirname, '..', '..'),
  getBlacklistRE: () =>
    blacklist([

    ]),
  getProjectRoots: () => [
    // Include current package as project root
    path.resolve(__dirname),
    // Include symlinked packages as project roots
    path.join(__dirname, "../.."),
  ],
};


/// this works


const path = require('path');
const blacklist = require('metro/src/blacklist');

module.exports = {
  extraNodeModules: {

  },
  getBlacklistRE: () =>
    blacklist([
      /[/\\]Users[/\\]mrhughes[/\\]Projects[/\\]Dev[/\\]mobileweb[/\\]packages[/\\]widget[/\\]node_modules[/\\]react-native[/\\].*/
    ]),
  getProjectRoots: () => [
    // Include current package as project root
    path.resolve(__dirname),
    // Include symlinked packages as project roots
    path.resolve('/Users/mrhughes/Projects/Dev/mobileweb/packages/widget')
  ],
};
