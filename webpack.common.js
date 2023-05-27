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
    filename: 'bundle.js',
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
        },
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
      },
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
      template: './src/parts/research.html',
      filename: './parts/research.html'
      // chunks: ['index']
    }),

    // define page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/define.html',
      filename: './parts/define.html'
      // chunks: ['index']
    }),

    // develop page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/develop.html',
      filename: './parts/develop.html'
      // chunks: ['index']
    }),

    // deliver page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/deliver.html',
      filename: './parts/deliver.html'
      // chunks: ['index']
    }),

    // history page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/research/history.html',
      filename: './parts/research/history.html'
      // chunks: ['index']
    }),

    // digital_product page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/research/digital_product.html',
      filename: './parts/research/digital_product.html'
      // chunks: ['index']
    }),

    // digital_process page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/research/digital_process.html',
      filename: './parts/research/digital_process.html'
      // chunks: ['index']
    }),

    // mvp page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/research/mvp.html',
      filename: './parts/research/mvp.html'
      // chunks: ['index']
    }),

    // product_market_fit page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/research/product_market_fit.html',
      filename: './parts/research/product_market_fit.html'
      // chunks: ['index']
    }),

    // product_market_fit page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/research/product_market_fit.html',
      filename: './parts/research/product_market_fit.html'
      // chunks: ['index']
    }),

    // business_requirement page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/research/business_requirements.html',
      filename: './parts/research/business_requirements.html'
      // chunks: ['index']
    }),

    // functional_requirement page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/research/functional_requirements.html',
      filename: './parts/research/functional_requirements.html'
      // chunks: ['index']
    }),

    // how_to_generate_ideas page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/research/how_to_generate_ideas.html',
      filename: './parts/research/how_to_generate_ideas.html'
      // chunks: ['index']
    }),

    // brainstorming page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/research/ideas/brainstorming.html',
      filename: './parts/research/ideas/brainstorming.html'
      // chunks: ['index']
    }),

    // list_making page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/research/ideas/list_making.html',
      filename: './parts/research/ideas/list_making.html'
      // chunks: ['index']
    }),

    // free_writing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/research/ideas/free_writing.html',
      filename: './parts/research/ideas/free_writing.html'
      // chunks: ['index']
    }),

    // brainstorming page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/research/ideas/brainstorming.html',
      filename: './parts/research/ideas/brainstorming.html'
      // chunks: ['index']
    }),

    // triz page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/research/ideas/triz.html',
      filename: './parts/research/ideas/triz.html'
      // chunks: ['index']
    }),

    // scamper page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/research/ideas/scamper.html',
      filename: './parts/research/ideas/scamper.html'
      // chunks: ['index']
    }),

    // mindmapping page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/research/ideas/mindmapping.html',
      filename: './parts/research/ideas/mindmapping.html'
      // chunks: ['index']
    }),

    // target_audience
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/define/target_audience.html',
      filename: './parts/define/target_audience.html'
      // chunks: ['index']
    }),

    // competitor_analysis
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/define/competitor_analysis.html',
      filename: './parts/define/competitor_analysis.html'
      // chunks: ['index']
    }),

    // interview_methods
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/define/interview_methods.html',
      filename: './parts/define/interview_methods.html'
      // chunks: ['index']
    }),

    // customer_development page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/define/customer_development.html',
      filename: './parts/define/customer_development.html'
      // chunks: ['index']
    }),
    
    // swot page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/define/swot.html',
      filename: './parts/define/swot.html'
      // chunks: ['index']
    }),

    // smart page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/define/smart.html',
      filename: './parts/define/smart.html'
      // chunks: ['index']
    }),

    // unit_economics page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/define/unit_economics.html',
      filename: './parts/define/unit_economics.html'
      // chunks: ['index']
    }),

    // jtbd page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/define/jtbd.html',
      filename: './parts/define/jtbd.html'
      // chunks: ['index']
    }),

    // cjm page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/define/cjm.html',
      filename: './parts/define/cjm.html'
      // chunks: ['index']
    }),

    // roadmap page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/develop/roadmap.html',
      filename: './parts/develop/roadmap.html'
      // chunks: ['index']
    }),

    // lean_canvas page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/develop/lean_canvas.html',
      filename: './parts/develop/lean_canvas.html'
      // chunks: ['index']
    }),

    // user_flow page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/develop/user_flow.html',
      filename: './parts/develop/user_flow.html'
      // chunks: ['index']
    }),

    // user_stories page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/develop/user_stories.html',
      filename: './parts/develop/user_stories.html'
      // chunks: ['index']
    }),

    // what_user_gets page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/parts/deliver/what_user_gets.html',
      filename: './parts/deliver/what_user_gets.html'
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
