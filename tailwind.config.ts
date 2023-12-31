import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('/images/pattern.svg')",
      },
      colors: {
        "slate-gray": "#708090", // background
        "navy-blue": "#001F3F", //headlines
        gold: "#FFD700", // call to action
        "emerald-green": "#007F4F", //sub background
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        lato: ["var(--font-lato)"],
      },
    },
  },
  plugins: [],
};
export default config;
