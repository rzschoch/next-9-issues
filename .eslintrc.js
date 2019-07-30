module.exports = {
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  "env": {
    "es6": true,
    node: true
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "overrides": [
    {
      "files": "src/**",
      "env": {
        "browser": true
      },
      "parser": "babel-eslint",
      "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
          "jsx": true
        },
        "sourceType": "module"
      },
      "plugins": [
        "react"
      ]
    },
    {
      "files": "**/*.spec.js",
      "env": {
        "browser": false,
        "jest": true
      }
    }
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
