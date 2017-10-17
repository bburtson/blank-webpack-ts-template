const path = require('path');

// webpack config
module.exports = {
    entry: ['./app.ts'],
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: 'brett.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true
}