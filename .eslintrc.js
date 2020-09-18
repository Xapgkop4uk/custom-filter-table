module.exports = {
  'env': {
    'browser': true
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'comma-style': 2,
    'no-unused-vars': 2,
    'quotes': [
      'error',
      'single'
    ],
    'require-jsdoc': 0,
    'max-len': [
      'error',
      140
    ],
    'no-invalid-this': 0
  },
};
