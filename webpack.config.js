const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  context: path.resolve("src"),
  mode: "development",
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: [".vue", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg|otf)$/,
        loader: "url-loader?limit=100000",
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer()],
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: ["vue-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: "./index.html" }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new VueLoaderPlugin(),
  ],
  entry: "./index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  devServer: {
    contentBase: "./index.html",
    port: 8080,
  },
};
