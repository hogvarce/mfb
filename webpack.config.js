const path = require('path');
const webpack = require('webpack');
const { env } = require('process');
const R = require('ramda');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const currentNodeEnv = R.defaultTo('development', env.NODE_ENV);
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: [
        'bootstrap/dist/css/bootstrap.css',
        'babel-polyfill',
        "./src/index.tsx",
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
    },
    mode: currentNodeEnv,
    // Enable sourcemaps for debugging webpack's output.
    devServer: {
        hot: true,
        publicPath: '/',
        filename: 'bundle.js',
        historyApiFallback: true,
    },
    resolve: {
        modules: [
            path.join(__dirname, 'src'),
            'node_modules',
        ],
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
            localforage: 'localforage/dist/localforage.js'
        },
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            {
                test: /\.css$/,
                include: path.join(__dirname, 'node_modules'),
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            insertAt: 'top',
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /localforage\/dist\/localforage.js/,
                loader: 'exports?localforage',
            }
        ],
        noParse: [
            /localforage\/dist\/localforage.js/
        ]
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            fetch: 'exports-loader?self.fetch!whatwg-fetch/dist/fetch.umd',
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
        }),
        new CheckerPlugin(),
    ]
};
