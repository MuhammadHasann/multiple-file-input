import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      screens: {
        "2xl": "1320px",
      },
      colors: {
        light: "#F6F6F6",
        dark: "#0c0c0c",
        primary: "#E3256B",
        second: "#FFB2CE",
      },
      boxShadow: {
        custom: "0 4px 12px 0px #E3256B37",
      },
    },
  },
  plugins: [],
};
export default config;
