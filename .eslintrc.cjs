module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["eslint-comments"],
  rules: {
    "eslint-comments/require-description": "error",
    "no-console": [
      "warn",
      {
        allow: ["error", "info", "table", "warn"],
      },
    ],
  },
};
