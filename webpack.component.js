const fs = require('fs');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// ‘-’ 转换驼峰
function toCamel(str) {
  const translateStr = str.replace(/([^-])(?:-+([^-]))/g, function ($0, $1, $2) {
    return $1 + $2.toUpperCase();
  });
  return translateStr.charAt(0).toUpperCase() + translateStr.slice(1);
}

// 处理路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

// 获取编译的路径
function getEntry() {
  const packageFileList = fs.readdirSync(resolve('packages'));
  const packageRootPath = path.resolve(__dirname, 'packages');

  const entries = {};

  packageFileList.forEach(function (packagePath) {
    const filePath = path.resolve(packageRootPath, packagePath, 'index.ts');
    const packageName = toCamel(packagePath);
    entries[packageName] = filePath;
  });

  return entries;
}

module.exports = {
  mode: 'production',
  entry: getEntry(),
  output: {
    path: resolve('dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: [
          resolve('src'),
          resolve('packages')
        ],
        exclude: [
          resolve('node_modules'),
          resolve('dist'),
          resolve('lib')
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              happyPackMode: false,
              appendTsSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ],
        include: [
          resolve('src'),
          resolve('packages')
        ]
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ],
        include: [
          resolve('node_modules/element-ui/lib/theme-chalk')
        ]
      },
      {
        test: /\.less$/,
        oneOf: [
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          {
            use: [
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash:8].[ext]'
            }
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@packages': resolve('packages')
    },
    extensions: [
      '*',
      '.js',
      '.vue',
      '.ts',
      '.tsx'
    ]
  }
};
