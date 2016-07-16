module.exports = {
  context: __dirname + "/src",
  entry: "./app.js",

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },
}

// babel-loader
loaders: [
        {
          // 只針對js與jsx檔案
          test: /\.jsx?$/,

          // 只包含`src`目錄
          include: [
            __dirname + "/src"
          ],

          exclude: /node_modules/,

          // 也可以使用'babel-loader'
          loader: 'babel',

          // 其他設定preset或plugin
           query: {
            presets: ['react', 'es2015']
           }
        }
    ]

