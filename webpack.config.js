const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, '/src/index.html'),
    filename: 'index.html',
    inject: 'body',
  });  

module.exports = () => {
    return {
        output: {
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.js|.jsx/,
                    use: "babel-loader"
                }
            ]
        },
        plugins: [htmlWebpackPluginConfig]
    }
}