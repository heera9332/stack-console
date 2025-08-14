// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        h1: [
          "42px", // mobile default
          {
            lineHeight: "48px",
            fontWeight: "600",
            "@screen md": {
              fontSize: "64px",
              lineHeight: "76px",
            },
          },
        ],
        h2: [
          "36px",
          {
            lineHeight: "42px",
            fontWeight: "600",
            "@screen md": {
              fontSize: "56px",
              lineHeight: "64px",
            },
          },
        ],
        h3: [
          "32px",
          {
            lineHeight: "38px",
            fontWeight: "600",
            "@screen md": {
              fontSize: "48px",
              lineHeight: "56px",
            },
          },
        ],
        h4: [
          "28px",
          {
            lineHeight: "36px",
            fontWeight: "600",
            "@screen md": {
              fontSize: "36px",
              lineHeight: "44px",
            },
          },
        ],
        h5: [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "600",
          },
        ],
      },
    },
  },
  plugins: [],
};
