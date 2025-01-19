import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#FFFDD0",
        Begie: "#F5F5DC"
      },
      width: {
        'image': '250px',
      },
      height: {
        'image': '250px',
      },
    },
  },
  plugins: [],
} satisfies Config;
