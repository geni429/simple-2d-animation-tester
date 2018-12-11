const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  devtool: "soruce-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts|tsx/,
        use: "awesome-typescript-loader"
      },
      {
        test: /\.js/,
        use: "babel-loader"
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html"
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: "bundle.js.map"
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3000
  }
};
