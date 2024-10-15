module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'prettier', 'no-only-tests'],
  env: {
    node: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  root: true,
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.*', 'tsconfig*.json', 'reflectionData.ts', 'vite.config.ts'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'always',
      },
    ],
    semi: ['off'],
    eqeqeq: 'error',
    quotes: 'off',
    'no-only-tests/no-only-tests': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    'prefer-const': 'error',
    'no-console': 'error',
    'linebreak-style': ['error', 'unix'],
    'comma-dangle': ['error', 'only-multiline'],
    'no-restricted-imports': ['error', { patterns: ['./*', '../*'] }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-default-export': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
  },
  overrides: [
    {
      files: ['**/*.test.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-floating-promises': 'off', // https://github.com/nodejs/node/issues/51292#issuecomment-1932043340
      },
    },
    {
      'files': ['jsx-runtime.ts', 'jsx-dev-runtime.ts'],
      rules: {
        '@typescript-eslint/no-namespace': 'off',
      },
    },
  ],
};
