
[TOC]

## 基本配置

### 入口文件 entry

* 单入口

	``` json
	entry: {
		main: './src/index.js'
	}
	```
* 多入口
  
	``` json
	entry: {
		foo: './src/page-foo.js',
		bar: './src/page-bar.js',
	}
	```

### 处理多种文件格式 loader
	最终把不同格式文件都解析成js文件，以便打包后在浏览器中运行。

``` json
module: {
	rules: [
		{
			test: /\.jsx?/,
			includes: [
				path.resolve(__dirname, 'src') // 指定那些路径下的文件需要经过 loader 处理
			],
			use: 'babel-loader', // 指定使用的 loader
		}
	]
}

```

### 插件 plugin 

例如： 压缩js代码

``` json
const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
	  plugins: [
	    	new UglifyPlugin()
	  ],
}
```

### 输出 output

* 常规
	
	``` json
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js'
		}
	```
	
* 多入口	生成不同文件

	``` json
	entry: {
		foo: './src/foo.js',
		bar: './src/bar.js',
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist',
	}


	```

* 配置hash

	``` json
	// 路径中使用 hash，每次构建时会有一个不同 hash 值，避免发布新版本时线上使用浏览器缓存
	output: {
		filename: '[name].js',
		path: __dirname + '/dist/[hash]',
	}
	```

## 搭建基本开发环境

### 关联 HTML - html-webpack-plugin

