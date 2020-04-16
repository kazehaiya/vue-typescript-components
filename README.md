## vue-typescript-components

### 项目介绍
本项目主要记录 typescript 版本的 vue 组件开发的配置，实现目标包括：

- [x] 组件构建发包
- [x] 按需引用
- [x] 简单的 ts 引入支持
- [ ] 详细的 ts 声明（单文件 ts 声明）

### 遇到的问题

#### class 语法导致组件 name 值被压缩
配置 `vue.config.js` 文件，添加如下内容：

``` js
module.exports = {
  // ...
  configureWebpack: config => {
    if (!isDev) {
      // 修复 class 名被压缩问题
      config.optimization.minimizer[0].options.terserOptions.keep_fnames = true;
    }
  },
}
```

> 原因：vue 默认用 terser 压缩代码，没有配置 class 名压缩问题。

#### 本地环境引入编译的代码报错
配置 `vue.config.js` 文件，更新 js 配置的 `exclude` 内容。

``` js
const path = require('path');

// 配置公共请求路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // ...
  chainWebpack: config => {
    // 新增 js 的 exclude 内容
    config.module.rule('js').exclude.add([resolve('lib'), resolve('dist')]);
  },
}
```

#### 单文件构建引入的 css 报错
单文件构建时，如果引入了 node_modules 内 css 文件，在编译时会报错，这是因为配置 `loader` 时，其默认是忽略 node_modules 的，因此编译时会提示找不到对应的 css 文件，应该如此配置：

``` js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        // ...
        include: [
          resolve('node_modules/element-ui/lib/theme-chalk')
        ]
      }
    ]
  }
};
```

将对应的文件加入 include 文件列表内即可
