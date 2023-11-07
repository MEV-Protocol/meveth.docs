// @ts-check

/**
 * @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig}
 */
module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  printWidth: 100,
  proseWrap: 'never',
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  quoteProps: 'as-needed',
  semi: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^@constants/(.*)$',
    '^@hooks/(.*)$',
    '^@layout/(.*)$',
    '^@styles/(.*)$',
    '^@components/(.*)$',
    '^@pages/(.*)$',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  overrides: [
    {
      files: '*.md',
      options: {
        parser: 'markdown',
        printWidth: 120,
        proseWrap: 'never',
        tabWidth: 4,
        useTabs: true,
        singleQuote: false,
        bracketSpacing: true,
      },
    },
  ],
};
