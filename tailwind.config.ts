import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textDark: "#353436",
        bgBlue: "#354867",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        greatVibes: "var(--font-great-vibes)",
        poppins: "var(--font-poppins)",
        parisienne: "var(--font-parisienne)",
        cinzel: "var(--font-cinzel)",
        darumadrop: "var(--font-darumadrop)"
      }
    },
  },
  plugins: [],
};
export default config;
