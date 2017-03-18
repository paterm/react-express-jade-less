const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, 'public/');
const APP_DIR = path.resolve(__dirname, 'app/client/');

const config = {
    entry: APP_DIR + '/app.jsx',
    output: {
        path: BUILD_DIR,
        filename: '/bundle/bundle.js'
    },
    module : {
        loaders : [{
            test : /\.jsx/,
            include : APP_DIR,
            loader : 'babel-loader'
        },{
            test : /\.less/,
            include : APP_DIR,
            loader : ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!less-loader'})
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
        },{
            test: /\.png$/,
            loader: 'file-loader?name=images/[hash].[ext]'
        },{
            test: /\.jpg$/,
            loader: 'file-loader?name=images/[hash].[ext]'
        },{
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }]
    },
    plugins: [
        new ExtractTextPlugin('index.css'),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.ProvidePlugin({
            _: "lodash",
            lodash: "lodash",
            "window.lodash": "lodash"
        })
    ],
    watch: true
};

module.exports = config;