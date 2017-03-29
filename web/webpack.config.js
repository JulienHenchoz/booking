module.exports = {
    context: __dirname + '/app',
    entry: './client.js',
    output: {
        filename: 'client.js',
        path: __dirname + '/dist/',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react']
            }
        }],
    },
}
