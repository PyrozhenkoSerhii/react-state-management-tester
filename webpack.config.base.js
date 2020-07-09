const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");


module.exports = {
  target: "web",
  module: {
    rules: [
      // {
      //   test: /.jsx?$/,
      //   exclude: /node_modules/,
      //   use: [
      //     {
      //       loader: "babel-loader",
      //       options: {
      //         presets: [
      //           "@babel/preset-env",
      //           "@babel/preset-react",
      //         ],
      //         plugins: [
      //           ["@babel/plugin-proposal-class-properties", { loose: true }],
      //           ["@babel/plugin-proposal-optional-chaining"],
      //           ["@babel/plugin-transform-runtime", { regenerator: true }],
      //         ],
      //       },
      //     },
      //   ],
      // },
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
