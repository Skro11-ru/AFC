module.exports = {
	env: {
		es2022: true,
		browser: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:sonarjs/recommended',
		'plugin:unicorn/recommended',
		// 'plugin:prettier/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',

	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 'latest',
		sourceType: 'module',
	},

	plugins: [
		'@typescript-eslint',
		// 'prettier',
		'sonarjs',
		'unicorn',
	],
	globals: {
		__IS_DEV__: true,
	},
	rules: {
		'no-console': 'off',
		'max-len': [2, 120],
		'import/no-unresolved': 0,
		'import/no-extraneous-dependencies': 0,
		'unicorn/prefer-module': 0,
		'unicorn/no-array-for-each': 0,
		'no-shadow': 0,
		'@typescript-eslint/no-shadow': ['error'],
		'unicorn/filename-case': [
			'error',
			{
				cases: {
					camelCase: true,
					pascalCase: true,
				},
			},
		],

		'unicorn/prevent-abbreviations': [
			'error',
			{
				replacements: {
					e: false,
					res: false,
					cmd: false,
					ref: false,
					dev: false,
					len: false,
					nof: false,
					btn: false,
					acc: false,
					err: false,
					req: false,
					val: false,
					prev: false,
					i: false,
					props: false,
					obj: false,
					str: false,
					mod: false,
					env: false,
				},
			},
		],
		'import/prefer-default-export': 'off',
		// 'import/extensions': [
		// 	'error',
		// 	'ignorePackages',
		// 	{
		// 		'': 'never',
		// 		jsx: 'never',
		// 		ts: 'never',
		// 		tsx: 'never',
		// 	},
		// ],
		'react/jsx-filename-extension': [
			2,
			{ extensions: ['.tsx', '.ts', '.js', '.jsx'] },
		],
		'no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/function-component-definition': 'off',
		'import/extensions': 'off',
		'no-underscore-dangle': 'off',
	},
};
