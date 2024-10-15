// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      spacing: {
        2.5: "0.625rem",
        7.5: "1.875rem",
        25: "6.25rem",
      },
    },
  },
  corePlugins: {
    preflight: false,
    backgroundColor: false,
    textColor: false,
    borderColor: false,
    gradientColorStops: false,
    placeholderColor: false,
    ringColor: false,
    ringOffsetColor: false,
    divideColor: false,
  },
  plugins: [],
  important: true,
};
