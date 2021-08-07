module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    defineProps: 'readonly'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/newline-after-import': ['error', { count: 1 }],
    'max-len': 'off',
    'arrow-parens': ['error', 'as-needed']
  }
}
