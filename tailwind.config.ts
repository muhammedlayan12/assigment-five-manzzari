import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        forum: ["Forum", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        algerian: ["Algerian", "serif"],
      },
      colors:{
        primary: "rgb(188, 166, 123)",
        secondry:"black",
        textColor:"#838383",
        headings:"white",
      },
    },
  },
  plugins: [],
};

export default config;
