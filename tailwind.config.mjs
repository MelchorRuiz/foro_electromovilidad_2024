/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			fontFamily: {
				'jersey': ['"Jersey 15"', 'sans-serif'],
				'open-sans': ['"Open Sans"', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
			},
			colors: {
				'primary': '#01038b',
				'secondary': '#007ae9',
				'success': '#4CAF50',
				'error': '#FF204E',
			}
		},
	},
	plugins: [require('flowbite/plugin')],
}
