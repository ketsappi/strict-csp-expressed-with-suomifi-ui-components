const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['css-loader'],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: '/node_modules',
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.ejs',
        filename: './index.ejs',
      }),
    ],
  };
};
