module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	ignorePatterns: ['.eslintrc.js'],

	rules: {
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/ban-ts-ignore': 0,
		'@typescript-eslint/member-delimiter-style': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},
};
