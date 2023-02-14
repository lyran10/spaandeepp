/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors : {
      "offWhite" : "#f9f9f9",
      "lightBlue" : "#2F93B5",
      "greyish" : "rgba(232, 232, 232, 1)",
      "white" : "rgb(255 255 255)",
      "whitish" : "#FFFFFF",
      "yellow" : "#FCCF6A"
    },
    screens: {
      'xs' : '0px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {},
    backgroundImage : {
      "homeImage1" : "url(/src/components/home/eye1.jpg)",
      "laptop" : "url(/src/components/aboutUs/laptop1.jpg)",
      "atWork" : "url(/src/components/groupImage/atWork.jpg)",
      "group" : "url(/src/components/trusted/group.jpg)",
    },
    boxShadow: {
      "custom": '0px 4px 4px  rgba(0, 0, 0, 0.2)'
    },
  },
  plugins: [],
}
