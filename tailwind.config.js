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
        navy: {
          950: '#070A14',
          900: '#0B1020', // Primary dark background
          850: '#0F172A',
          800: '#111827', // Secondary dark background
          700: '#1E293B',
          600: '#334155',
        },
        violet: {
          400: '#A78BFA', // Highlight
          500: '#8B5CF6', // Primary accent
          600: '#7C3AED',
          700: '#6D28D9',
        },
        cyan: {
          400: '#38BDF8', // Secondary accent
          500: '#0EA5E9',
          600: '#0284C7',
        },
        text: {
          main: '#F8FAFC',
          muted: '#94A3B8',
          darkMain: '#0F172A',
          darkMuted: '#475569',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 15px rgba(139, 92, 246, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(56, 189, 248, 0.5)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 100%)',
      }
    },
  },
  plugins: [],
}
