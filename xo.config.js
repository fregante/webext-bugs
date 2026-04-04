import globals from 'globals';

/** @type {import('xo').FlatXoConfig} */
export default [
	{
		languageOptions: {
			globals: {
				...globals.browser,
				chrome: 'readonly',
			},
		},
		rules: {
			'import-x/no-unassigned-import': 'off',
			'@typescript-eslint/strict-void-return': 'off',
		},
	},
];
