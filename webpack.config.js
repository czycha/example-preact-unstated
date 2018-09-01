const path = require("path");

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            }
        ]
    },
    resolve: {
        alias: {
            "react": "preact-compat",
            "react-dom": "preact-compat",
            "create-react-context": "preact-context"  // path.resolve(__dirname, 'src/createPreactContext')
        }
    },
    devtool: 'sourcemap'
};