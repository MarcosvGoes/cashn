import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        'yellow': '#FFD600',

      },
      screens: {
        sm: '481px',
        md: '769px',
        lg: '977px',
        xl: '1441px',      }
    },
  },
  plugins: [],
}
export default config
