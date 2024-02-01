import { createStore } from 'vuex'
const myInfoLink = "https://s1bu.github.io/portfolio_server/data/"
export default createStore({
  state: {
    testimonials:null,
    projects:null,
    education:null,
    skill:null,
    work:null,
    badge:null,
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
    setEducation(state, education){
      state.education = education;
    },
    setSkills(state,skill){
      state.skill = skill;
    },
    setWork(state,work){
      state.work = work;
    },
    setBadges(state,badge){
      state.badge = badge;
    },
  },
  actions: {
    // TESTIMONIALS
    async fetchTestimonials(context){
      try{
        let res = await fetch(myInfoLink);
        let { Testimonials } = await res.json() //assuming this be targeting the name of the array we want in the server
        context.commit('setTestimonials' ,Testimonials)
      }
      catch(e){
        console.log(e.message);
      }
    },
    // PROJECTS
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
    // EDUCATION
    async fetchEducation(context){
      try{
        let res = await fetch(myInfoLink);
        let { education } = await res.json()
        context.commit('setEducation' ,education.reverse())
      }
      catch(e){
        console.log(e.message);
      }
    },
    // SKILLS
    async fetchSkills(context){
      try{
        let res = await fetch(myInfoLink);
        let { Skills } = await res.json()
        context.commit('setSkills' ,Skills)
      }
      catch(e){
        console.log(e.message);
      }
    },
      // WORK
      async fetchWork(context){
        try{
          let res = await fetch(myInfoLink);
          let { Work } = await res.json()
          context.commit('setWork' ,Work)
        }
        catch(e){
          console.log(e.message);
        }
      },
      //badges
      async fetchBadges(context) {
        try {
          let res = await fetch(myInfoLink);
          let { badge } = await res.json();
          context.commit('setBadges', badge); // Corrected method name
        } catch (e) {
          console.log(e.message);
        }
      },
  },
  modules: {
  }
})
