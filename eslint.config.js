import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
    { ignores: ['dist/**', 'node_modules/**'] },
    {
        files: ['src/**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
            },
            globals: {
                document: 'readonly',
                window: 'readonly',
                console: 'readonly',
                navigator: 'readonly',
                browser: true,
                es2021: true,
            },
        },
        plugins: {
            '@typescript-eslint': ts,
            'react-hooks': reactHooks,
            prettier,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...ts.configs.recommended.rules,
            'react-refresh/only-export-components': 'warn',
            'prettier/prettier': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
        },
        settings: {
            react: { version: 'detect' },
        },
    },
];
