/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      container : {
        center : true,
      },
      boxShadow : {
        custom1:'0px 2px 40px rgba(8,70,78,0.08)' ,
        custom2:'0px 0px 30px rgba(8,73,81,0.06)' ,
      },
      backgroundImage: {
        services :'url(../img/services/bg.svg)',
        testimonials :'url(../img/testimonials/bg.svg)',
        departments :'url(../img/departments/bg.svg)',
        quoteRight :'url(../icons/testimonials/quote_right.svg)',
        quoteLeft :'url(../icons/testimonials/quote_left.svg)',
      },
      transitionProperty : {
        height : true ,
      }
    },

  },
  plugins: [],
}

