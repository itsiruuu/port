/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#050507',
          card: '#0d0d11',
          surface: '#111116',
          elevated: '#16161f',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.04)',
        },
        pink: {
          accent: '#e98bab',
          light: '#f4adc4',
          hover: '#f19db9',
          muted: '#d985a7',
          lavender: '#c982aa',
          glow: 'rgba(233, 139, 171, 0.25)',
          subtle: 'rgba(233, 139, 171, 0.12)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'pink-radial': 'radial-gradient(circle at center, rgba(233, 139, 171, 0.15) 0%, transparent 70%)',
        'pink-hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(233, 139, 171, 0.25), rgba(255, 255, 255, 0))',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
