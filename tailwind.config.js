module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					primary: "#2E3440",
					secondary: "#3B4252",
					accent: "#434C5E",
					neutral: "#4C566A",
					"base-100": "#ffffff",
				},
			},
			{
				dark: {
					primary: "#45bd62",
					secondary: "#92c3c9",
					accent: "#434C5E",
					neutral: "#4C566A",
					"base-100": "#2a303c",
				},
			},
			"dark",
			"cupcake",
		],
	},
}
