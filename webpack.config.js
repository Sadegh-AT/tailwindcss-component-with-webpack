const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: { // js file should be here
        bundle: "./src/js/index.js",
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "js/[name].[contenthash].js",
        assetModuleFilename: "images/[hash][ext][query]",
    },
    // experiments: {
    //     asset: true,
    // },
    stats: "errors-only",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name][ext]",
                },
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Index Page",
            filename: "index.html",
            template: "./src/index.html",
            chunks: ["bundle"], // name of js file for this html page
        }),

        new CleanWebpackPlugin(),
    ],
};
