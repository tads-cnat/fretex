module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-undef": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-function-return-type": "off"
  },
};
