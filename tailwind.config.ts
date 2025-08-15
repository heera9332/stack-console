/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.html"],
  theme: {
    extend: {
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      fontSize: {
        h1: ["clamp(42px, 4.5vw, 64px)", { lineHeight: "clamp(48px,5.5vw,76px)", fontWeight: "600" }],
        h2: ["clamp(36px, 3.8vw, 56px)", { lineHeight: "clamp(42px,4.6vw,64px)", fontWeight: "600" }],
        h3: ["clamp(32px, 3.0vw, 48px)", { lineHeight: "clamp(38px,3.8vw,56px)", fontWeight: "600" }],
        h4: ["clamp(28px, 2.2vw, 36px)", { lineHeight: "clamp(36px,3.0vw,44px)", fontWeight: "600" }],
        h5: ["20px", { lineHeight: "28px", fontWeight: "600" }],
        body1: ["18px", { lineHeight: "28px" }],
        body2: ["16px", { lineHeight: "24px" }],
        body3: ["14px", { lineHeight: "20px" }],
      },
    },
  },
  plugins: [],
};
