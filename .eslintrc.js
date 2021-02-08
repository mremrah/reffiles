module.exports = {
    parser: "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "es6":true,
        "node": true,
        "jest": true,
        "mocha": true
    },
    "extends": [
        'eslint:recommended', 
        'plugin:react/recommended',
        "plugin:react/recommended",
        "standard"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            experimentalObjectRestSpread: true,
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        'react/prop-types': ['off'],
        'react/display-name': ['off'],
        'react/no-unescaped-entities': ['off'],
        indent: ['error', 2, {SwitchCase: 1}],
        'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-console': ['warn', {allow: ['clear', 'info', 'error', 'dir', 'trace']}],
        curly: 'error',
        'no-else-return': 'error',
        'no-unneeded-ternary': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': 'error',
        strict: 'error',
        'symbol-description': 'error',
        yoda: ['error', 'never', {exceptRange: true}],
      }
};
