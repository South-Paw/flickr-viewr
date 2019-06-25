module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended'],
  env: {
    browser: true,
  },
  rules: {
    'prettier/prettier': 'warn',

    'import/prefer-default-export': 'off',

    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/jsx-one-expression-per-line': 'off',
  },
};
