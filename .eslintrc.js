module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    jquery: true,
    node: true,
  },
  extends: [
    'standard',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/standard',
    'prettier/react',
  ],
  globals: {},
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'jsx-a11y'],
  root: true,
  rules: {
    'prefer-const': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-pascal-case': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/no-onchange': 'off',
  },
}
