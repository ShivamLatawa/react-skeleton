const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.join(__dirname, '/src/index.html'),
    filename: 'index.html',
    inject: 'body',
  });  

module.exports = () => {
    return {
        entry: path.join(__dirname, '/src/index.jsx'),
        output: {
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.jsx$/,
                    use: "babel-loader"
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        plugins: [htmlWebpackPluginConfig]
    }
}