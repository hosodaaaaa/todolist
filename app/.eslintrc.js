module.exports = {
  env: {
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    // 型宣言のチェック
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    // 設定した拡張子をimportできる様にする
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // propの検証
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    // 以下設定した拡張子でもjsxが使用できるように設定する
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx']
      },
    ],
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    // インポート時に拡張子を省く設定
    'import/extensions': [
      'error', 'always',
      {
        'ts': 'never',
        'tsx': 'never'
      }
    ],
  },
  // filesに記載した拡張子にruleを上書きする
  overrides: [
    {
      'files': ['*.ts', '*.tsx'],
      'rules': {
        'no-undef': 'off'
      }
    }
  ]
};
