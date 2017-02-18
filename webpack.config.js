const webpack = require('webpack'),
    path = require('path'),
    glob = require('glob'),
    BundleTracker = require('webpack-bundle-tracker'),
    postcssCssnext = require('postcss-cssnext')
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    utils = require('./build/utils')

module.exports = {

    context: __dirname,

    entry: utils.compileEntry('./build/src/*/!(_)*.*'),

    output: {
        path: path.join(__dirname, 'core/static'),
        filename: '[name]-[hash].js',
        publicPath: '/static/'
    },

    module: {
        rules: [
        {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015', 'react'] }
            }],
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader', 
                    'sass-loader',
                    { 
                        loader: 'postcss-loader', 
                        options: { 
                            plugins: () => [
                              postcssCssnext({
                                browsers: ['last 2 versions', 'ie >= 9'],
                                compress: true,
                              })
                          ]
                        }
                    }
                ]
                })
        },
        ],
    },

    plugins: [

        new BundleTracker({filename: './webpack-stats.json'}),
        new ExtractTextPlugin('[name]-[hash].css'),
        new CopyWebpackPlugin([
            { from: 'build/src/js/components', to: 'js' }
        ])

    ],

    resolve: {
        descriptionFiles: ['package.json'],
        extensions: [
            '.js',
            '.css', '.scss', '.less',
            '.json', '.yml'
        ],
    }
}
