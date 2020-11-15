const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");


module.exports = {
  target: "web",
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        test: /\.(eot|ttf|woff2?|otf|png|jpe?g|gif|svg|mp4)$/,
        use: [
          "file-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ],
  },
  node: {
    fs: "empty",
  },
  plugins: [
    new Dotenv(),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
  ],
};
