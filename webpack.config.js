const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, '/src/index.html'),
    filename: 'index.html',
    inject: 'body',
});

module.exports = () => {
    return {
        entry: path.join(__dirname, '/src/index.tsx'),
        output: {
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.tsx$/,
                    use: ["awesome-typescript-loader"]
                },
                {
                    test: /\.jsx$/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.scss$/,
                    use: ["style-loader", "css-loader", "sass-loader"]
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.tsx']
        },
        plugins: [htmlWebpackPluginConfig]
    }
}