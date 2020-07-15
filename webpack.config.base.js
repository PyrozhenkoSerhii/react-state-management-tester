const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");


module.exports = {
  target: "web",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "awesome-typescript-loader",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.(eot|ttf|woff2?|otf|png|jpe?g|gif|svg)$/,
        use: [
          "file-loader",
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
