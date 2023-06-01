module.exports = {
	env: {
		es2022: true,
		browser: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier', 'sonarjs', 'unicorn', 'svelte3'],
	settings: {
		'svelte3/typescript': true,
	},
	extends: [
		'airbnb-base',
		'plugin:sonarjs/recommended',
		'plugin:unicorn/recommended',
		'plugin:prettier/recommended',
		'prettier',
	],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
			rules: {
				'import/first': 0,
				'import/prefer-default-export': 0,
				'import/no-mutable-exports': 0,
				'unused-export-let': 0,
			},
			extends: [
				'plugin:@typescript-eslint/recommended',
			],
			// parserOptions: {
			// 	project: ['./tsconfig.json'], // Specify it only for TypeScript files
			// },
		},
		{
			files: ['*.ts', '*.tsx'],
			extends: [
				'plugin:@typescript-eslint/recommended',
				// 'airbnb-typescript/base',
			],
			rules: {
				'unicorn/filename-case': 0,
				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': ['error'],
			},
			// parserOptions: {
			// 	project: ['./tsconfig.json'], // Specify it only for TypeScript files
			// },
		},
		{
			files: ['*test.ts'],
		},
	],
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
				case: 'camelCase',
				ignore: ['API'],
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
				},
			},
		],
		'import/prefer-default-export': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				'': 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
	},
};
