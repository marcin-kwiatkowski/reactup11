const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/app/app.js',
    bail: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }]
        }, {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }, {
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }]
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            }]
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            }, {
                loader: 'sass-loader'
            }]
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            use: [{
                loader: 'file-loader'
            }]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}
