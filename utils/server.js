const browserSync = require("browser-sync");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");


const env = process.env.NODE_ENV;
const config = require("../config/webpack.config")(env);
const compiler = webpack(config);

const options = {
  publicPath: config.output.publicPath,
  quiet: true,
  noInfo: true,
}

browserSync({
  port: 3000,
  ui: {
    port: 3001
  },
  https: true,
  server: {
    baseDir: "src",
    middleware: [
      webpackDevMiddleware(compiler, options),
      webpackHotMiddleware(compiler)
    ]
  }
})

