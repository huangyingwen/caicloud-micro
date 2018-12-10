const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    singleSpaEntry: "./src/singleSpaEntry.js"
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "release"),
    libraryTarget: "umd",
    library: "layout"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader?cacheDirectory"],
        exclude: /node_modules/
      },
      {
        test: /\.yml$/,
        loader: "yml-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/app1/"
            }
          }
        ]
      },
      {
        oneOf: [
          {
            test: /\.(module|m).less$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  sourceMap: true,
                  modules: true,
                  localIdentName: "[path][name]__[local]--[hash:base64:5]"
                }
              },
              {
                loader: "postcss-loader",
                options: {
                  plugins: [
                    require("autoprefixer")({ browsers: ["last 2 versions"] }),
                    require("postcss-flexbugs-fixes")
                  ]
                }
              },
              { loader: "less-loader", options: { sourceMap: true } }
            ]
          },
          {
            test: /\.less$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  sourceMap: true
                }
              },
              {
                loader: "postcss-loader",
                options: {
                  plugins: [
                    require("autoprefixer")({ browsers: ["last 2 versions"] })
                  ]
                }
              },
              { loader: "less-loader", options: { sourceMap: true } }
            ]
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
      },
      {
        test: /\.(gif|jpg|png|svg)\??.*$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              name: "img/[name].[ext]"
            }
          }
        ]
      }
    ]
  },

  externals: {
    react: "react",
    "react-dom": "react-dom"
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
      i18n: path.join(__dirname, "./src/assets/i18n")
    })
  ],

  mode: "development",

  devtool: "eval-source-map",
  // devtool: 'none',

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    }
  }
};
