const webpack = require("webpack"),
  path = require("path"),
  glob = require("glob"),
  BundleTracker = require("webpack-bundle-tracker"),
  babelrc = require("./babelrc"),
  dev = process.env.NODE_ENV === "development";

const entry = () => {
  let entry = {};
  const pages = glob.sync("src/containers/*.js");
  pages.forEach(page => {
    const fileName = page
      .split("/")
      .pop()
      .split(".")[0];
    entry = {
      ...entry,
      [fileName]: [
        ...(dev ? ["react-hot-loader/patch"] : []),
        path.resolve(page),
        ...(dev
          ? [
              "webpack-hot-middleware/client?path=http://localhost:9000/__webpack_hmr"
            ]
          : [])
      ]
    };
  });
  return entry;
};

module.exports = {
  mode: dev ? "development" : "production",
  devtool: dev ? "eval" : "source-map",
  entry,
  output: {
    path: path.resolve("./core/static/pages/"),
    filename: dev ? "[name].js" : "[name]-[hash].js",
    publicPath: dev ? "http://localhost:9000/" : "/static/pages/"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: "babel-loader",
          options: babelrc
        },
        exclude: "/node_modules/"
      }
    ]
  },
  plugins: [
    new BundleTracker({ filename: "./webpack-stats.json" }),
    ...(dev
      ? [
          new webpack.NamedModulesPlugin(),
          new webpack.HotModuleReplacementPlugin()
        ]
      : [])
  ]
};
