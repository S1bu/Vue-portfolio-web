<template>
    <div class="page">
   
  <div class="resume ">
      <section id="education"></section>
    <!-- educatioin section -->
    <div class="holder">
      <center><h1>Education</h1></center>
      <div class="container">
        <div class="card" v-for="education in education" :key="education.id">
          <div class="card-body">
            <h5 class="card-title"><span class="bold">Qualification</span> : {{ education.name }}</h5>
            <p class="card-text"><span class="bold">Course</span> : {{ education.Level }}</p>
            <p class="card-text"><span class="bold">Year</span> : {{ education.year }}</p>
          </div>
        </div>
      </div>
    </div>
    <section id="skills"></section>
    <!-- skills section -->
    <div class="holder">
        <center><h1>Skills</h1></center>
      <div class="container">
        <div class="card" v-for="skill in skill" :key="skill.id">
          <div class="card-body">
            <div class="row">
                <div class="col">
                    <h5 class="card-title"><span class="bold">Skill</span>  : {{ skill.name }}</h5>
                    <p class="card-text"><span class="bold">Level </span>: {{ skill.Level }} </p>
                    <p class="card-text"><span class="bold">Comment </span>: {{ skill.Description}} </p>
                </div>
                <div class="col-3">
                    <div class="logo">
                        <img :src="skill.logo" :alt="skill.name">
                    </div>
                </div>
            </div>
      
          </div>
        </div>
      </div>
    </div>
    <!-- work experince section -->
    <section id="work"></section>
    <div class="holder">
      <center><h1>Work</h1></center>
      <div class="container">
        <div class="card" v-for="work in work" :key="work.id">
          <div class="work-image text-center">
            <img :src="work.image" class="card-img-top" :alt="work.institution">
          </div>
          <div class="card-body">
            <p class="card-title"> <span class="bold">Company</span>  : {{ work.institution }}</p>
            <p class="card-title"> <span class="bold">Role </span> : {{ work.role }}</p>
            <p class="card-title"> <span class="bold">Duration </span> : {{ work.duration}}</p>
            <p class="card-title"> <span class="bold"> Reason for leaving</span> : {{ work.reason }}</p>
            <p class="card-title"> <span class="bold"> Duties </span> : {{ work.duties }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
      
  </div>
  <sideNav/>
  
     
    </template>
    
    <script>
    import sideNav from '@/components/sideNav.vue';
  
    export default {
      computed: {
          education() {
              return this.$store.state.education
          },
          skill() {
              return this.$store.state.skill
          },
          work() {
              return this.$store.state.work
          }
      },
      mounted() {
          this.$store.dispatch('fetchEducation'),
          this.$store.dispatch('fetchSkills'),
          this.$store.dispatch('fetchWork')
      },
      name: 'ResumeView',
    components: {
  //  import registered here
   sideNav,
    }
    };
    </script>
  
  <style scoped>
  :root{
    --background-color:linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
      ---second-color : rgba(10, 18, 33, 0.59);
  }
  .page{
   /* background-color: midnightblue; */
   background-image: var(--background-color);
  }
  h1{
    font-weight: 900;
    color:var(---second-color);
  }
  .resume{
   margin-left: 20%;
  }
  .holder{
      margin: 4rem 0;
  }
  .container {
     display: grid;
     grid-template-columns: auto auto auto; 
  }
  .bold{
    font-weight: 900;
    font-size: 1.3rem;
    color: var(---second-color);
  }
  .container img {
     width: 200px;
     height: 200px; 
     object-fit:contain;
    aspect-ratio: 3/5;
    margin-top: 10px;
  }
  
  .logo img{
      width:4rem;
      height:4rem;
      object-fit:contain;
     aspect-ratio: 3/5;
     margin-top: 5px;
  }
  .card {
     margin: 5px;
     backdrop-filter: blur(6px) saturate(165%);
     -webkit-backdrop-filter: blur(6px) saturate(165%);
     background-color: var(---second-color);
     border-radius: 12px;
     border: 1px solid rgba(255, 255, 255, 0.125);
     color: white;
   transition: 1s;
  }
  .work-image img{
    width:4rem;
    height:4rem;
  }
  
  #skills{
    margin: 10%;
  }
  #education{
    margin: 10%;
  }
  
  #work{
    margin: 10%;
  }
  /********** RESPONSIVENESS *********/
  @media(width < 600px){
      .container {
          display: grid;
          grid-template-columns: auto; 
       }
  }
  </style>