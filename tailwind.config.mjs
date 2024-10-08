/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}'],
	theme: {
		extend: {
			colors: {
        'electric-lime': '#ccff00',
        'lime-zest': '#d9ff00',
        'vegan-mastermind': '#20cf46',
        'acid-pops': '#41ea67',
        'gray-fog': '#f1f5f9',
        'straw': '#d4be90',
      },
      boxShadow: {
        'header-element': 'inset 0 0 10px 2px #c7c7c779'
      },
      height: {
        '84': '21rem',
        '88': '22rem',
        '128': '32rem',
        '100': '25rem'
      },
      width: {
        '84': '21rem',
        '88': '22rem',
        '100': '25rem',
        '128': '32rem',
        '192': '48rem'
      },
      screens: {
				'xs': '512px'
			},
		},
	},
	plugins: [
    require('daisyui'),
    require('flowbite/plugin'),
    function ({ addComponents }) {
      addComponents({
        '.card-side': {
          position: 'absolute',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          transitionDuration: '700ms'
        },
      });
    },
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hidden': {
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}
