import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-background': "url('/images/home_recipes.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        primary: '#FF6F61',
        secondary: '#FFD700',
        background: '#FFFFFF',
        textPrimary: '#333333',
        textSecondary: '#555555',
        cardBackground: '#F5F5F5',
        accent: '#8FBC8F',
      },
    },

  },
  plugins: [nextui()]
};
export default config;
