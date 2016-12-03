var path = require("path");
var webpack = require('webpack');

var plugins = [
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        }
    })
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            comments: false
        })
    );
}

module.exports = {
    entry: {
        app: ["./src/js/app.js"]
    },
    output: {
        path: __dirname + "/build",
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        preLoaders: [
            {
                test: /\.js[x]?$/,
                include: /src/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: "babel-loader?presets[]=es2015&presets[]=react"
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000"
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    "file?hash=sha512&digest=hex&name=[hash].[ext]",
                    "image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false"
                ]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
};
