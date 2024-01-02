/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flexGrow: {
        2: "2",
      },
      borderRadius: {
        "50%": "50%",
        sender: "10px 0px 10px 10px",
        receiver: "0px 10px 10px 10px",
      },
      maxWidth: {
        "80%": "80%",
        "35%": "35%",
      },
      minWidth: {
        "25%": "25%",
      },
    },
  },
  plugins: [],
};
