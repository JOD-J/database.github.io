const path = require('path');
// Работа с HTML
const HTMLWebpackPlugin = require('html-webpack-plugin');
// отчистка папки build
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// работа с CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// mode development или production
const mode = process.env.NODE_ENV;
// проверяем mode 
const isDev = mode === 'development';

const generateFileName = ext => isDev ? 
	`[name].${ext}` : // для разработки
	`[name].[contenthash].${ext}` // для продакшена 
	;


module.exports = {
	// изначальная папка с исходниками 
	context: path.resolve(__dirname, 'src'),
	// development или production
	mode,
	// точка входа для js файла
	entry: {
		main: './js/index.js',
	},
	// точка выхода для js файла
	output: {
		//  создайет файл с именем bundle.js
		filename: `./js/${generateFileName('js')}`,
		// создайет папку build в корне нашей программы весь билд импорт туда
		path: path.resolve(__dirname, 'build'),
		// скрипты
		environment: {
			// отключение стрелочных функций 
			arrowFunction: false
		},
		assetModuleFilename: '[path][name].[ext]'
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.html$/i,
				use: ['html-loader']
			},
			{
				test: /\.(c|sa|sc)ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
						}
					},
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpg|jpeg|svg|gif)$/i,
				type: 'asset'
			}
		]
	},
	plugins: [
		// отчистка папки build
		new CleanWebpackPlugin(),
		// рабоат с HTML документами 
		new HTMLWebpackPlugin({
			template: './html/index.html',
			minify: {
				collapseWhitespace: !isDev
			}
		}),
		// рабоат с CSS документами 
		new MiniCssExtractPlugin({
			filename: `./css/${generateFileName('css')}`
		})
	],
	// сервер 
	devServer: {
		// начальная папка для сервера откуда будет запуск
		contentBase: './build',
		// открывает браузер по умолчанию 
		open: true,
		port: 3000,
		// изменение css
		hot: true,
		compress: true,
		overlay: true,
		// writeToDisk: true,
		historyApiFallback: true,
	},
	// мапы для дев разработки 
	devtool: isDev && 'source-map'
};