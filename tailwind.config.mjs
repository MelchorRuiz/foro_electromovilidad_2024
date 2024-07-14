/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			fontFamily: {
				'open-sans': ['"Open Sans"', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
			},
			colors: {
				'primary': '#0a1650',
				'secondary': '#007ae9',
				'success': '#4CAF50',
				'error': '#FF204E',
			}
		},
	},
	plugins: [require('flowbite/plugin')],
}
