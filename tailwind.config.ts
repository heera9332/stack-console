/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.html"],
  // (We’re light-only, but leaving darkMode is harmless; not used)
  darkMode: ["class"],

  theme: {
    extend: {
      colors: {
        /* core shadcn tokens */
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        /* brand extras */
        yellow: "var(--yellow)",
        "yellow-light": "var(--yellow-light)",
        red: "var(--destructive)",            // same as brand red
        "red-light": "var(--red-light)",
        gray: "var(--gray)",
        offwhite: "var(--offwhite)",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },

      fontFamily: {
        sans: ["var(--font-inter)"],
      },

      /* fluid typography (your Figma scale) */
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
