module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
      "standard-with-typescript",
      "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    parserOptions: {
      "ecmaVersion": "latest",
      "sourceType": "module",
      project: './tsconfig.json'
  },
    "plugins": [
        "@typescript-eslint",
        "react"
    ],
    "rules": {
      '@typescript-eslint/explicit-function-return-type': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/method-signature-style': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off'
    }
}
