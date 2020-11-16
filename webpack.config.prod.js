const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");


module.exports = merge(baseConfig, {
  mode: "production",
  entry: {
    "redux/v1": "./src/redux/v1/index.tsx",
    "redux/v2": "./src/redux/v2/index.tsx",
    "redux/frequency": "./src/frequency/redux-canvas/index.tsx",
    "mobx/v1": "./src/mobx/v1/index.tsx",
    "mobx/v2": "./src/mobx/v1/index.tsx",
    "mobx/frequency": "./src/frequency/mobx-canvas/index.tsx",
    "context/v1": "./src/context/v1/index.tsx",
    "context/frequency": "./src/frequency/context-canvas/index.tsx",
    "presentation": "./src/presentation/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCssAssetsPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
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
      chunks: ["mobx/v2"],
      filename: "public/mobx/v2/index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["context/v1"],
      filename: "public/context/v1/index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["presentation"],
      filename: "public/presentation/index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["redux/frequency"],
      filename: "public/frequency/redux/index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["mobx/frequency"],
      filename: "public/frequency/mobx/index.html",
      template: "src/index.html",
    }),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ["context/frequency"],
      filename: "public/frequency/context/index.html",
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
});
