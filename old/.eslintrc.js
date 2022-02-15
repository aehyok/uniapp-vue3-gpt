module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    defineProps: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 'off', // console。log可用
    'no-unused-vars': 'off',
    'vue/no-unused-vars': 'off',
    'import/no-unresolved': 'off',
    'vue/require-v-for-key': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/valid-v-for': 'off',
    'no-plusplus': 'off', // i++可用
    'import/prefer-default-export': 'off'
  }
}
