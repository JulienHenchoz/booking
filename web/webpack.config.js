module.exports = {
    context: __dirname + '/bundles/react',
    entry: './app.js',
    output: {
        filename: 'app.js',
        path: __dirname + '/bundles/react/dist',
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
