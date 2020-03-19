const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");


module.exports = merge(baseConfig, {
  entry: {
    "redux/v1": "./src/redux/v1/index.js",
    "redux/v2": "./src/redux/v2/index.js",
    "mobx/v1": "./src/mobx/v1/index.js",
    "context/v1": "./src/context/v1/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["redux/v1"],
      filename: "public/redux/v1/index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["redux/v2"],
      filename: "public/redux/v2/index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["mobx/v1"],
      filename: "public/mobx/v1/index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["context/v1"],
      filename: "public/context/v1/index.html",
      template: "src/index.html",
    }),
  ],
});
