import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        flowout: {
          '100%': { transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '1px 1px 10px #ffffff' },
          '50%': { boxShadow: '2px 2px 25px #ffffff' },
        },
        changeBackground: {
          '0%': {
            backgroundColor: '#9bb5ce',
            color: '#a50011',
            fill: '#a50011',
          },
          '20%': {
            backgroundColor: '#f9e5c9',
            color: '#574f6f',
            fill: '#574f6f',
          },
          '40%': {
            backgroundColor: '#505f4e',
            color: '#9bb5ce',
            fill: '#9bb5ce',
          },
          '60%': {
            backgroundColor: '#574f6f',
            color: '#9bb5ce',
            fill: '#9bb5ce',
          },
          '80%': {
            backgroundColor: '#a50011',
            color: '#f9e5c9',
            fill: '#f9e5c9',
          },
          '100%': {
            backgroundColor: '#9bb5ce',
            color: '#505f4e',
            fill: '#505f4e',
          },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
