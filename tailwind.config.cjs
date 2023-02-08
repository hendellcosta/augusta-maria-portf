/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundColor: {
        lightDark: "#444",
        likeBlack: "#1d1d1d",
        slate: "#a6a6a6",
        colored:
          "linear-gradient(90deg, rgba(250,82,82,1) 0%, rgba(221,36,118,1) 98%)",
        pink: "rgb(221, 36, 118)",
      },
      textColor: {
        slate: "#a6a6a6",
        instagram: "#d62976",
        linkedin: "#0072b1",
        facebook: "#4267B2",
        phone: "#e93b81",
        email: "#c17ceb",
        location: "#6ab5b9",
      },
      borderColor: {
        likeBlack: "#1d1d1d",
        pink: "#f44336",
      },
    },
  },
  plugins: [],
};
