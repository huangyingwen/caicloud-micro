const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");

module.exports = {
  entry: {
    main: "src/portal.js"
  },
  output: {
    publicPath: "/public",
    filename: "[name].js",
    path: path.resolve(__dirname, "release")
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader"
      }
    ]
  },
  node: {
    fs: "empty"
  },
  resolve: {
    modules: [__dirname, "node_modules"]
  },
  plugins: [
    new WriteFilePlugin(),
    CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/index.html"),
        copyUnmodified: true,
        force: true
      },
      { from: path.resolve(__dirname, "src/style.css") },
      {
        from: path.relative(
          __dirname,
          "node_modules/react/umd/react.development.js"
        )
      },
      {
        from: path.relative(
          __dirname,
          "node_modules/react-dom/umd/react-dom.development.js"
        )
      },
      { from: path.relative(__dirname, "node_modules/requirejs/require.js") }
    ])
    // new CleanWebpackPlugin(["release"])
  ],
  devtool: "source-map",
  externals: [],
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "./release"),
    historyApiFallback: true,
    hot: false,
    inline: false,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    }
  }
};
