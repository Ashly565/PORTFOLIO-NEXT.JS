
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lighthover:"#fcf4ff",
        darkhover:'#2a004a',
        darkTheme:'#11001F'
      },
      fontFamily:{
      Outfit : ["outfit","sans-serif"],
      Ovo:["Ovo","serif"]
    },
    boxShadow:{
      'black':'4px 0 4px  #000',
      'white':'4px 4px 0 #fff'
    },
    gridTemplateColumns:{
      'auto':'repeat(auto-fit,minmax(200px,1fr))'
    }
  },
},
  darkMode:'selector',
  plugins: [],
};