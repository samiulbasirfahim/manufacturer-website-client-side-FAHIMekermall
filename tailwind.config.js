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
					primary: "#ef3d55",
					secondary: "#3B4252",
					accent: "#434C5E",
					neutral: "#4C566A",
					"base-100": "#ffffff",
				},
			},
			{
				dark: {
					primary: "#ef3d55",
					secondary: "#F63E7B",
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
