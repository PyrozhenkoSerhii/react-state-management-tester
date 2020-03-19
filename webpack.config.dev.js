const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

const baseConfig = require("./webpack.config.base");


module.exports = merge(baseConfig, {
  entry: "./src/redux/v1/index.js",
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    host: "localhost",
    port: 80,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
});
