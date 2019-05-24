const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, '/src/index.html'),
    filename: 'index.html',
    inject: 'body',
});

module.exports = ({mode} = {mode: "production"}) => {
    return webpackMerge({
            mode: "production",
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
                    }
                ]
            },
            resolve: {
                extensions: ['.js', '.jsx', '.tsx']
            },
            plugins: [htmlWebpackPluginConfig],
            performance: {
                hints: false
            }
        },
        modeConfig(mode)
    )
}