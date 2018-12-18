module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "ecmaFeatures": {
            "sourceType": "module",
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            "tab", {
                "SwitchCase": 1
            }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "comma-dangle": [
            "error", {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "always-multiline"
            }
        ],
        "space-before-blocks": [
            "error",
            "always"
        ],
        "keyword-spacing": [
            "error"
        ],
        "react/display-name": [
            "off"
        ],
        "no-console": [
            "warn"
        ],
        "no-unused-vars": [
            "warn"
        ]
    }
};