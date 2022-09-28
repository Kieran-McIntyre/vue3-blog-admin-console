/* eslint-env node */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-strongly-recommended",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "quote-props": ["error", "as-needed"],
    quotes: ["error", "double"],
    "comma-dangle": ["error", "always-multiline"],
  },
}
