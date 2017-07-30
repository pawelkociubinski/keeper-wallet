const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  target: "web",
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".ts", ".pug"],
    alias: {
      containers:  path.join(process.cwd(), "src", "containers")
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new HtmlWebpackPlugin({
      template: "src/index.pug",
      inject: true
    }),
    new WebpackPwaManifest({
      name: "My Progressive Web App",
      short_name: "MyPWA",
      description: "My awesome Progressive Web App!",
      background_color: "#000000",
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.pug$/,
        use: "pug-loader"
      }
    ]
  }
}
