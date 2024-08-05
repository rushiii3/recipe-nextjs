import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    
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
  plugins: [],
};
export default config;
