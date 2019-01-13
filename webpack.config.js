let path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, './lib/'),
        filename: '[name].js'
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             loader: 'babel-loader',
    //             options: {
    //                 presets: [
    //                     ["es2015", { "modules": false }]
    //                 ]
    //             }
    //         },
    //     ]
    // }
};
