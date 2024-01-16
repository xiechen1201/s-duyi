module.exports = {
  mode: "development",
  //   watch: true,
  module: {
    rules: [
      {
        test: /\.jpeg$/,
        use: ["file-loader"]
      },
      {
        test: /\.css$/,

        use: ["style-loader", "css-loader?modules"]
      }
    ]
  }
};
