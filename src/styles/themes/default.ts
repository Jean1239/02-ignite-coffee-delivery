export const defaultTheme = {
	colors: {
		"base-white": "#ffffff",
		"base-background": "#faf9f9",
		"base-card": "#f2f1f1",
		"base-input": "#edecec",
		"base-button": "#e6e5e5",
		"base-hover": "#8c8585",
		"base-label": "#8c8585",
		"base-text": "#564f4c",
		"base-subtitle": "#3f3937",
		"base-title": "#272221",
		"brand-purple-dark": "#4b2894",
		"brand-purple": "#7f46f7",
		"brand-purple-light": "#ebe5f9",
		"brand-yellow-dark": "#c47e16",
		"brand-yellow": "#dbac2b",
		"brand-yellow-light": "#f0e8c9",
	},
	fonts: {
		title: {
			family: "'Baloo 2', cursive;",
			xl: {
				size: "3rem",
				weight: "800",
				lineHeight: "1.3",
			},
			l: {
				size: "2rem",
				weight: "800",
				lineHeight: "1.3",
			},
			m: {
				size: "1.5rem",
				weight: "800",
				lineHeight: "1.3",
			},
			s: {
				size: "1.25rem",
				weight: "700",
				lineHeight: "1.3",
			},
			xs: {
				size: "1.125rem",
				weight: "700",
				lineHeight: "1.3",
			},
		},
		text: {
			family: "'Roboto', sans-serif;",
			l: {
				size: "1.25rem",
				lineHeight: "1.3",
			},
			m: {
				size: "1rem",
				lineHeight: "1.3",
			},
			s: {
				size: "0.875rem",
				weight: "Regular",
				lineHeight: "1.3",
			},
			xs: {
				size: "0.75rem",
				weight: "400",
				lineHeight: "1.3",
			},
		},
		tag: {
			family: "Roboto",
			size: "0.625rem",
			weight: "700",
			lineHeight: "1.3",
		},
		button: {
			g: {
				family: "Roboto",
				size: "0.875rem",
				weight: "700",
				lineHeight: "160%",
			},
			m: {
				family: "Roboto",
				size: "0.75rem",
				weight: "Regular",
				lineHeight: "160%",
			},
		},
	},
} as const;
