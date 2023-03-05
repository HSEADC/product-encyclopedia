const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html'
      // chunks: ['index']
    }),

    // Research page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research.html',
      filename: './pages/research.html'
      // chunks: ['index']
    }),

    // define page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/define.html',
      filename: './pages/define.html'
      // chunks: ['index']
    }),

    // develop page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/develop.html',
      filename: './pages/develop.html'
      // chunks: ['index']
    }),

    // deliver page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/deliver.html',
      filename: './pages/deliver.html'
      // chunks: ['index']
    }),

    // history page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research/history.html',
      filename: './pages/research/history.html'
      // chunks: ['index']
    }),

    // digital_product page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research/digital_product.html',
      filename: './pages/research/digital_product.html'
      // chunks: ['index']
    }),

    // digital_process page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research/digital_process.html',
      filename: './pages/research/digital_process.html'
      // chunks: ['index']
    }),

    // mvp page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research/mvp.html',
      filename: './pages/research/mvp.html'
      // chunks: ['index']
    }),

    // product_market_fit page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research/product_market_fit.html',
      filename: './pages/research/product_market_fit.html'
      // chunks: ['index']
    }),

    // product_market_fit page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research/product_market_fit.html',
      filename: './pages/research/product_market_fit.html'
      // chunks: ['index']
    }),

    // business_requirement page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research/business_requirements.html',
      filename: './pages/research/business_requirements.html'
      // chunks: ['index']
    }),

    // functional_requirement page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research/functional_requirements.html',
      filename: './pages/research/functional_requirements.html'
      // chunks: ['index']
    }),

    // how_to_generate_ideas page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research/how_to_generate_ideas.html',
      filename: './pages/research/how_to_generate_ideas.html'
      // chunks: ['index']
    }),

    // brainstorming page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research/ideas/brainstorming.html',
      filename: './pages/research/ideas/brainstorming.html'
      // chunks: ['index']
    }),

    // list_making page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research/ideas/list_making.html',
      filename: './pages/research/ideas/list_making.html'
      // chunks: ['index']
    }),

    // free_writing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research/ideas/free_writing.html',
      filename: './pages/research/ideas/free_writing.html'
      // chunks: ['index']
    }),

    // brainstorming page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research/ideas/brainstorming.html',
      filename: './pages/research/ideas/brainstorming.html'
      // chunks: ['index']
    }),

    // triz page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research/ideas/triz.html',
      filename: './pages/research/ideas/triz.html'
      // chunks: ['index']
    }),

    // scamper page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research/ideas/scamper.html',
      filename: './pages/research/ideas/scamper.html'
      // chunks: ['index']
    }),

    // mindmapping page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/research/ideas/mindmapping.html',
      filename: './pages/research/ideas/mindmapping.html'
      // chunks: ['index']
    }),

    // customer_development page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/define/customer_development.html',
      filename: './pages/define/customer_development.html'
      // chunks: ['index']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],

  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
