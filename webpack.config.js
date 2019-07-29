const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app1: './src/app1/index.tsx',
        app2: './src/app2/index.tsx',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name]/app.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'app1/index.html',
            template: './src/index.html',
            chunks: ['app1']
        }),
        new HtmlWebpackPlugin({
            filename: 'app2/index.html',
            template: './src/index.html',
            chunks: ['app2']
        })
    ]
}
