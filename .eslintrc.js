module.exports = {
	extends: ['airbnb'],
	env: {
		browser: true,
	},
	rules: {
		'react/react-in-jsx-scope': 0,
		'react/jsx-indent': ['error', 'tab'],
		'indent': ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': 0,
		'react/jsx-props-no-spreading': 0,
		'react/prop-types': 0,
		'react/no-unescaped-entities': 0,
		'import/prefer-default-export': 0,
		'no-param-reassign': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'consistent-return': 0,
	}
}