import { createStore } from 'vuex'
const myInfoLink = "https://s1bu.github.io/portfolio_server/data/Portfolio.json"
export default createStore({
  state: {
    Testimonials:null,
  },
  getters: {
  },
  mutations: {
    setTestimonials(state, Testimonials){
      state.Testimonials = Testimonials
    },
  },
  actions: {
    async fetchTestimonials(data){
      try{
        let res = await fetch(myInfoLink);
        let { Testimonials } = await res.json()
       data.commit('setTestimonials' , Testimonials )
      }
      catch(e){
        console.log(e.message);
      }
    }
  },
  modules: {
  }
})
