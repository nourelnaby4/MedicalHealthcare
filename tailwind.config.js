/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT:'15px',
      }
    },
    screens:{
      sm:'640px',
      md:'768px',
      lg:'960px',
      xl:'1200px',
    },
    extend: {
      colors:{
        primary:'#242a2b',
        secondary:'#808080',
        accent:{
          DEFAULT:'#1cbccf',
          secondary:'#18abbd',
          tertiary: '#90c6cd',
        },
        gray:'#e8f0f1',
      },
      fontFamily:{
        primary:'Poppins',
      },
      boxShadow:{
        custom1:'0px 2px 40px 0px rgba(8,70,78,0.08)',
        custom2:'0px 0px 30px 0px rgba(8,73,78,0.06)',
      },
      backgroundImage:{
        service:'url(../../assets/img/services.svg)',
        testimonials:'url(../../assets/img/testimonials.svg)',
        departments:'url(../../assets/img/departments.svg)',
        qouteLeft:'url(../../assets/img/testimonials/qoute-left.svg)',
        qouteRight:'url(../../assets/img/testimonials/qoute-right.svg)',
      }
    },
  },
  plugins: [],
}

