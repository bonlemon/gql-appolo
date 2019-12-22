module.exports = {
    extends: [
        'prettier',
    ],
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    rules: {
        'no-multi-spaces': 2,
        'no-console': 'off',
    },
    parserOptions: {
        ecmaVersion: 6,
        experimentalObjectRestSpread: true,
        sourceType: 'module',
        impliedStrict: true,
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', 'prettier'],
};
