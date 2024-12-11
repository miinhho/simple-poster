/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "animate-in": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        }
      },
      animation: {
        'animate-in': 'animate-in 1s ease-out forwards',
      },
      fontFamily: {
        inherit: 'inherit',
      },
      width: {
        '120': '30rem',
      },
    },
  },
  plugins: [],
};

