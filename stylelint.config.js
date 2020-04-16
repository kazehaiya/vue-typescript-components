module.exports = {
  extends: 'stylelint-config-standard',
  ignoreFiles: [
    '**/*.js',
    '**/*.md',
    '**/*.png',
    '**/*.json',
    'theme-config.scss',
    'src/theme/**/*'
  ],
  rules: {
    indentation: 2,
    'string-quotes': 'double',
    'rule-empty-line-before': null,
    'no-descending-specificity': null,
    'number-leading-zero': null,
    'selector-pseudo-element-colon-notation': null
  }
};
