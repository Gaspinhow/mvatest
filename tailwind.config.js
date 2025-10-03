module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f4c81",
          dark: "#0a3d6b",
          light: "#1e6bb8",
          lighter: "#3b82f6"
        },
        accent: "#dc2626",
        accentGold: "#f59e0b",
        bg: "#ffffff",
        fg: "#1a1a1a",
        text: {
          dark: "#0f172a",
          light: "#334155",
          muted: "#64748b"
        }
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
};
