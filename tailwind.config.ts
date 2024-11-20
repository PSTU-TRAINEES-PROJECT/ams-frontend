import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#EEF8FF",
          300: "#bfdffe",
          400: "#3498DB",
          500: "#0946EE",
        },
        secondary: {
          200: "#D1CDCD",
          300: "#ACA0A0",
          400: "#595959",
          500: "#9B9292",
        },
        success: {
          400: "#2ECC71",
        },
        error: {
          400: "#F22E24",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
    },
  },
  plugins: [],
} satisfies Config;
