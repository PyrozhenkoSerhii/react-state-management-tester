const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

const baseConfig = require("./webpack.config.base");


module.exports = (env) => merge(baseConfig, {
  entry: `./src/${env.project}/index.tsx`,
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    host: "localhost",
    port: 80,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
});
