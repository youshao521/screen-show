var devProxy = ['/api', '/ping', '/auth', '/gateway',
  '/core-metadata', '/support-scheduler', '/core-export',
  '/support-notification', '/rule-engine', 'support-logging',
  '/exportshow', '/profile', '/ws',
];
var modifyVars = require('./theme');
var proEnv = require('./config/pro.env');
var devEnv = require('./config/dev.env');
var env = process.env.NODE_ENV;

var target = env === 'prodction' ? proEnv.hosturl : devEnv.hosturl;

let proxyObj = {};
devProxy.forEach((val) => {
  proxyObj[val] = {
    target,
    changeOrigin: true,
    pathRewrite: {
      [`^${val}`]: val,
    },
  }
})

module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars,
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    host: '0.0.0.0',
    contentBase: './src',
    // hot: false,
    proxy: proxyObj,
    // before: app => {}
  },
  publicPath: './', // 路径打包处理为相对路径
}
