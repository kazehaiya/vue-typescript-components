module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'eol-last': 'off',
    'no-var': 'error',
    'arrow-parens': 'off',
    'no-useless-escape': 'off',
    'generator-star-spacing': 'off',
    'quote-props':['error', 'as-needed'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 函数前的空格
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never'
      }
    ],
    // 驼峰（属性支持非驼峰）
    'camelcase': 'off',
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    // 结尾分号
    'semi': 'off',
    '@typescript-eslint/semi': ['error'],
    // js 的 require 报错问题
    '@typescript-eslint/no-var-requires': 'off',
    // 显示 any 报错
    '@typescript-eslint/no-explicit-any': 'off',
    // 无用变量提示
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'none',
        ignoreRestSiblings: true
      }
    ]
  }
}

