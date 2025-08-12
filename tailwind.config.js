/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        oil: "#000000",       // pure black
        asphalt: "#15191E",
        steel: "#30363D",
        rust: "#CB5A31",
        sand: "#E7DFCF",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        sans: ["var(--font-body)"],
      },
      borderRadius: { xl: "14px", "2xl": "20px" },
      boxShadow: { soft: "0 8px 24px rgba(0,0,0,0.15)" },
    },
  },
  plugins: [],
};
