module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "import", "jsx-a11y"],
  rules: {
    "react/prop-types": 0,
    indent: ["error", 2],
    "linebreak-style": 1,
    quotes: ["error", "double"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
