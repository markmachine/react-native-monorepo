"use strict";

var path = require("path");
const cwd = path.resolve(__dirname);
const blacklist = require('metro/src/blacklist');

var config = {
  getProjectRoots() {
    return getRoots();
  },
  getBlacklistRE: () =>
    blacklist([
      /[/\\]Users[/\\]mrhughes[/\\]Projects[/\\]Dev[/\\]mobileweb[/\\]packages[/\\]widget[/\\]node_modules[/\\]react-native[/\\].*/
    ]),

  /**
   * Specify where to look for assets that are referenced using
   * `image!<image_name>`. Asset directories for images referenced using
   * `./<image.extension>` don't require any entry in here.
   */
  getAssetRoots() {
    return getRoots();
  }
};

function getRoots() {
  return [
    cwd, // current directory
    path.resolve(cwd, "../.."), // project directory
    path.resolve('/Users/mrhughes/Projects/Dev/mobileweb/packages/widget')
  ];
}

module.exports = config;




/*
const path = require('path');
const blacklist = require('metro/src/blacklist');

module.exports = {
  extraNodeModules: {

  },
  getBlacklistRE: () =>
    blacklist([
      /[/\\]Users[/\\]mrhughes[/\\]Projects[/\\]Dev[/\\]mobileweb[/\\]packages[/\\]widget[/\\]node_modules[/\\]react-native[/\\].
    ]),
  getProjectRoots: () => [
    // Include current package as project root
    path.resolve(__dirname),
    // Include symlinked packages as project roots
    path.resolve('/Users/mrhughes/Projects/Dev/mobileweb/packages/widget')
  ],
};
*/