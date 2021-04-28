module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/extensions': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        paths: ['src'],
      },
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts'],
      },
    },
  },
};
