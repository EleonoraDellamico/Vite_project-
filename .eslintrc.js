module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"react/react-in-jsx-scope": 0,
		"react/jsx-uses-react": 0,
		eqeqeq: "warn",
		strict: "off",
		"react/no-set-state": "off",
	},
};
