const path = require('path');

// 是否是 dev 环境
const isDev = process.env.NODE_ENV === 'development';

// 配置公共请求路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => {
    // 设置 libraryExport，防止 ES6 语法导出报错
    config.output.libraryExport('default');
    // 新增部分别名
    config.resolve.alias.set('@packages', resolve('packages'));
    // 新增后缀扩展
    config.resolve.extensions.add('.less');
    // 新增 js 的 exclude 内容
    config.module.rule('js').exclude.add([resolve('lib'), resolve('dist')]);
    // production 环境额外包配置
    if (!isDev) {
      // 打包时忽略掉如下包
      config.externals({
        lodash: {
          commonjs: 'lodash',
          commonjs2: 'lodash',
          amd: 'lodash',
          root: '_'
        },
        'element-ui': 'element-ui'
      });
      // 将 build 的 source-map 优化一下
      config.devtool('cheap-module-source-map');
    }
  },
  configureWebpack: config => {
    if (!isDev) {
      // 修复 class 名被压缩问题
      config.optimization.minimizer[0].options.terserOptions.keep_fnames = true;
    }
  },
  devServer: {
    open: true
  }
};
