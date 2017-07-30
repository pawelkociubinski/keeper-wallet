const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = (env) => {
  return merge(baseConfig, {
    devtool: "cheap-module-eval-source-map",
    cache: true,
    entry: {
      app: [
        "webpack-hot-middleware/client?reload=true",
        path.join(process.cwd(), "src", "index.js")
      ]
    },
    output: {
      path: path.join(process.cwd(), "dist"),
      publicPath: "/",
      filename: "[name].js",
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require(path.join(process.cwd(), "dist", "libraries-manifest.json")),
      }),
    ]
  })
}
