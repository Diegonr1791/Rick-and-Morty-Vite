/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
import scrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./index.html",
    "./src/*/.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/*/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui(), scrollbar({ nocompatible: true })],
};

