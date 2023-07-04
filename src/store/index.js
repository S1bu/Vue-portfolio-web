import { createStore } from 'vuex'
const myInfoLink = "https://s1bu.github.io/portfolio_server/data/"
export default createStore({
  state: {
    testimonials:null,
    projects:null,
  },
  getters: {
  },
  mutations: {
    setTestimonials(state, testimonials){
      state.testimonials = testimonials;
    },
    setProjects(state, projects){
      state.projects = projects;
    },
  },
  actions: {
    async fetchTestimonials(context){
      try{
        let res = await fetch(myInfoLink);
        let { Testimonials } = await res.json()
        context.commit('setTestimonials' ,Testimonials)
      }
      catch(e){
        console.log(e.message);
      }
    },
    async fetchProjects(context){
      try{
        let res = await fetch(myInfoLink);
        let { Projects } = await res.json()
        context.commit('setProjects' ,Projects)
      }
      catch(e){
        console.log(e.message);
      }
    },
  },
  modules: {
  }
})