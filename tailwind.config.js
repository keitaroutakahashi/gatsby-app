module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sp: { max: "768px" },
      pc: "769px",
    },
    extend: {
      zIndex: {
        "-1": "-1",
      },
      gridTemplateColumns: {
        course: "repeat(auto-fill, minmax(160px, 1fr))",
      },
    },
    colors: {
      brand: {
        primary: "#5cf2e8",
        secondary: "#f54ea2",
      },
      white: "#fff",
      black: "#333",
      gray: {
        light: "#ccc",
        dark: "#999",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
    },
  },
  plugins: [],
}
