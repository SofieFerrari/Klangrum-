/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "310px",
      md: "768px",
      lg: "1024px",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    colors: {
      blue: "#3D52A0",
      dirtWhite: "#fcfeff",
      gray: "#e5e5e5",
      yellow: "#fcf37c",
      lightYellow: "#FFF16D",
      yellowTransparent: "rgba(252, 247, 88, 0.7)",
    },
  },
  plugins: [],
});
