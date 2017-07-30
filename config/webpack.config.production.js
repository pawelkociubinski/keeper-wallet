const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = (env) => {
  return merge(baseConfig, {
    devtool: "source-map",
    bail: true,
    entry: {
      app: path.join(process.cwd(), "src", "index.js")
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.EnvironmentPlugin(["NODE_ENV"])
    ]
  })
}
