import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        botanical: "#0F3328",
        sage: "#8BA890",
        olive: "#5C6C45",
        cream: "#F7F3E9",
        gold: "#BEA06B"
      },
      boxShadow: {
        luxe: "0 20px 50px rgba(15, 51, 40, 0.15)"
      }
    }
  },
  plugins: []
} satisfies Config;
