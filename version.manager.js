/*
 * the  idea is to track the development lifecycle by automatic version
 * author: SeyyedMahdi Hassanpour
 * email:  SeyyedKhandon@gmail.com
 * */
const fs = require("fs");
const webpack = require("webpack");
const packageJson = require("./package.json");
const metadataJson = require("./metadata.json");

const projectName = packageJson.name || 0;
const version = packageJson.version || 0;
const buildVersion = metadataJson.production || 0;
const devVersion = metadataJson.development || 0;
const webpack_run_mode = process.env.NODE_ENV;
console.log(`Running Mode:${webpack_run_mode}`);
console.log(`App: ${projectName} v${version}`);
const plugins = [];

const generateBuildVersion = (stats = "") => {
  fs.readFile("metadata.json", function(err, content) {
    if (err) throw err;
    const metadata = JSON.parse(content);
    const increment_size = webpack_run_mode !== "production" ? 0.0001 : 0.01;
    metadata[webpack_run_mode] = (
      Number(metadata[webpack_run_mode]) + increment_size
    ).toFixed(4);
    metadata.version = version;
    fs.writeFile("metadata.json", JSON.stringify(metadata), function(err) {
      if (err) throw err;
      console.log("\nCurrent production number: rc_" + metadata.production);
      console.log("Current development number: dev_" + metadata.development);
      console.log("Current test:unit number: test_" + metadata.test);
    });
  });
};
// run this piece of code at each re-run in serve mode
const ArbitraryCodeAfterReload = function(cb) {
  this.apply = function(compiler) {
    if (compiler.hooks && compiler.hooks.done) {
      compiler.hooks.done.tap("webpack-arbitrary-code", cb);
    }
  };
};
// run once at each build time
console.log(`\nIncrementing ${webpack_run_mode} number...\n`);
switch (webpack_run_mode) {
  case "development":
    plugins.push(new ArbitraryCodeAfterReload(generateBuildVersion));
    break;
  case "production":
  case "test":
    generateBuildVersion();
    break;
  default:
    console.log(webpack_run_mode);
}
// git latest hash
const commitHash = require("child_process")
  .execSync("git rev-parse HEAD")
  .toString();

plugins.push(
  new webpack.DefinePlugin({
    "process.env": {
      PACKAGE_VERSION: '"' + version + '"',
      PACKAGE_NAME: '"' + projectName + '"',
      PACKAGE_BUILD_VERSION: '"' + buildVersion + '"',
      PACKAGE_DEV_VERSION: '"' + devVersion + '"',
      VUE_APP_SENTRY_RELEASE: JSON.stringify(commitHash)
    }
  })
);

module.exports = plugins;
