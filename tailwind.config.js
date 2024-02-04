/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "profile3": "url('/profile3.jpg')",
        "profile4": "url('/profile4.jpg')"
      },
      keyframes: {
        progress: {
          "0%": { left: "0px", top: "0px" },
          "25%": { left: "40px", top: "0px" },
          "50%": { left: "40px", top: "40px" },
          "75%": { left: "0px", top: "40px" },
          "100%": { left: "0px", top: "0px" },
        },
        progress2: {
          "0%": { left: "0px", top: "0px" },
          "25%": { left: "-40px", top: "0px" },
          "50%": { left: "-40px", top: "-40px" },
          "75%": { left: "0px", top: "-40px" },
          "100%": { left: "0px", top: "0px" },
        },
      },
      animation: {
        animProgress: "progress 4s ease-in-out infinite",
        animProgress2: "progress2 4s ease-in-out infinite"
      },
    },
  },
  plugins: [],
};
