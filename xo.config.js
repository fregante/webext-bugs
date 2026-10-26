import globals from 'globals';

/**
@type {import('xo').FlatXoConfig}
*/
export default [
	{
		ignores: ['source/demo/package.json', 'source/demo/options.html'],
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				chrome: 'readonly',
			},
		},
		rules: {
			'import-x/no-unassigned-import': 'off',
			'import-x/no-extraneous-dependencies': 'off',
			'unicorn/no-top-level-side-effects': 'off',
			'@typescript-eslint/strict-void-return': 'off',
		},
	},
];
