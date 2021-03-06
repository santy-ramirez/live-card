module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], 
        "no-irregular-whitespace": 2,
        "no-multi-spaces": 1,
    }
};
