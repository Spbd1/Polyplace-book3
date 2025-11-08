/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // OpenSea Core Colors
        background: "#13131A",
        surface: "#1A1A1A",
        card: "#1F1F1F",
        primary: "#3B82F6",
        accent: "#7B3FE4",
        border: "#2D2D2D",
        text: "#FFFFFF",
        muted: "#9CA3AF",
        success: "#10B981",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ["Satoshi", "Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.3)",
        glow: "0 0 20px rgba(123, 63, 228, 0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle at top left, #7B3FE4, #3B82F6)",
      },
    },
  },
  plugins: [],
};