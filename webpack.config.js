var ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: __dirname +'/src/index.js',
    devServer: {
        contentBase: './dest',
        hot: true
      },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|jpeg|svg|mp3|gif|ttf|otf)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new UglifyJSPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dest'
    }
}