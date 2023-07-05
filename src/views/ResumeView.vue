<template>

  <!-- educatioin section -->
    <div class="holder">
      <center><h1>Education</h1></center>
      <div class="container">
        <div class="card" v-for="education in education" :key="education.id">
          <div class="card-body">
            <h5 class="card-title"><span class="bold text-primary">Qualification</span> : {{ education.name }}</h5>
            <p class="card-text"><span class="bold text-primary">Course</span> : {{ education.Level }}</p>
            <p class="card-text"><span class="bold text-primary">Year</span> : {{ education.year }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- skills section -->
    <div class="holder">
        <center><h1>Skills</h1></center>
      <div class="container">
        <div class="card" v-for="skill in skill" :key="skill.id">
          <div class="card-body">
            <div class="row">
                <div class="col">
                    <h5 class="card-title"><span class="bold text-primary">Skill</span>  : {{ skill.name }}</h5>
                    <p class="card-text"><span class="bold text-primary">Level </span>: {{ skill.Level }} </p>
                </div>
                <div class="col">
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
    <div class="holder">
      <center><h1>Work</h1></center>
      <div class="container">
        <div class="card" v-for="work in work" :key="work.id">
          <div class="work-image text-center">
            <img :src="work.image" class="card-img-top" :alt="work.institution">
          </div>
          <div class="card-body">
            <h5 class="card-title"> <span class="bold text-primary">Company</span>  : {{ work.institution }}</h5>
            <p class="card-subtitle"> <span class="bold text-primary">Role </span> : {{ work.role }}</p>
            <p class="card-title"> <span class="bold text-primary">Duration </span> : {{ work.duration}}</p>
            <p class="card-title"> <span class="bold text-primary"> Reason for leaving</span> : {{ work.reason }}</p>
          </div>
        </div>
      </div>
    </div>
   
  </template>
  
  <script>
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
    }
  };
  </script>

<style scoped>
h1{
  color:white;
}
.holder{
  background-color: midnightblue;
}
.container {
   display: grid;
   grid-template-columns: auto auto auto;
    
}
.bold{
  font-weight: 900;
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
   background-color: rgba(10, 18, 33, 0.91);
   border-radius: 12px;
   border: 1px solid rgba(255, 255, 255, 0.125);
   color: white;
 transition: 1s;
}
.card:hover{
   border: 4px solid white;
}
.work-image img{
  width:4rem;
  height:4rem;
}
</style>