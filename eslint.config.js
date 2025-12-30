import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import {defineConfig, globalIgnores} from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {jsx: true},
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['warn', {varsIgnorePattern: '^[A-Z_]'}],
      'no-undef': 0,              // disallow use of undeclared variables unless mentioned in a /*global */ block
      'import/no-unresolved': 0,  // disallows ensures an imported module can be resolved to a module on the local filesystem
      'func-names': 0,            // require function expressions to have a name (off by default)
      'no-new': 0,
      'consistent-return': 0,
      'no-param-reassign': 0,
      'no-case-declarations': 0,
      'react-refresh/only-export-components': 0
    },
  },
])
