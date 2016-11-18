const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
    noInfo: true,
    hot: true,
    historyApiFallback: true
}).listen(8888, 'localhost', (error, result) => {
    if (error) {
        console.log(error);
    }
    console.log('Looks cool: http://localhost:8888');
});
