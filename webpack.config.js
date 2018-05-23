const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: 'babel-loader'
      },
      {
        test: /\.css/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  // 代码模块路径解析的配置
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, 'src'),
    ],

    extensions: [".wasm", ".mjs", ".js", ".json", ".jsx"]
  },

  plugins: [
    // 压缩js代码
    new UglifyPlugin(),
    // 关联 HTML
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'assets/index.html'
    }),
  ]
}