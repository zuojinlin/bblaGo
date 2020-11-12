module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-recommended',
    'prettier',
    'prettier/vue',
    'plugin:vue/essential',
    'plugin:prettier/recommended',
  ],
  rules: {
    'vue/no-unused-vars': 'error',
    'vue/no-multiple-template-root': 'off',
  },
}
