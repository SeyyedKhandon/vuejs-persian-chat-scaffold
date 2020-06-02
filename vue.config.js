// vue.js webpack config
// const path = require("path");
/* Version Manager plugin*/
const versionManager = require("./version.manager.js") || [];
/* Webpack bundle Analyzer*/
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
// plugins.push(new BundleAnalyzerPlugin());
/* Sentry build sourcemap*/
// const SentryPlugin = require("@sentry/webpack-plugin");
// const sentrySourceMap = new SentryPlugin({
//   release: process.env.VUE_APP_SENTRY_RELEASE,
//   include: "./dist",
//   ignore: ["node_modules", "vue.config.js"]
// });

module.exports = {
  // productionSourceMap: true,
  configureWebpack: config => {
    config.plugins.push(...versionManager);
    // if (process.env.NODE_ENV === "production") {
    //   config.plugins.push(sentrySourceMap);
    // }
  },
  css: {
    loaderOptions: {
      sass: {
        // data: `@import "assets/styles/variables/index.scss";`
      }
    }
  },
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      "^/repos": {
        target: "https://api.github.com",
        changeOrigin: true
      },
      "^/(api|actuator|authentication-server)": {
        target: "https://your-internet-server-address.net",
        changeOrigin: true
      },
      "^/adfs": {
        target: "https://login.your-adfs.server-address.net",
        changeOrigin: true
      }
    }
  }
};
