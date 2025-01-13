/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1E3A8A",
        "dark-gray":"#333333",
        "light-gray": "#F3F4F6",
      },
    },
  },
  plugins: [require("daisyui")],
};
