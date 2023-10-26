<template>
  <div class="page">

    <div class="resume ">
      <center>hover over card to see more info</center>
      <section id="education"></section>
      <!-- educatioin section -->
      <div class="holder">
        <center>
          <h1>Education</h1>
        </center>
        <div class="container-fluid">
          <div class="card"  v-for="education in education" :key="education.id">  
                  <div class="logo text-center">
                    <img :src="education.logo" :alt="education.name" loading="lazy">
                  </div>
                  <center>{{ education.name }} <i class="bi bi-hand-index"></i></center>
                  <br>
            
                  <div class="card-body">
                    <div class="logo text-center">
                      <img :src="education.logo" :alt="education.name" loading="lazy">
                    </div>
                <p class="card-text"><span class="bold">Qualification</span> : {{ education.name }}</p>
              <p class="card-text"><span class="bold">Course</span> : {{ education.Level }}</p>
              <p class="card-text"><span class="bold">Year</span> : {{ education.year }}</p>          
                </div>
                </div>
          </div>

      </div>
      <section id="skills"></section>
      <!-- skills section -->
      <div class="holder">
        <center>
          <h1>Skills</h1>
        </center>
        <div class="container-fluid">
          <div class="card" v-for="skill in skill" :key="skill.id">   

                <div class="col">
                  <div class="logo text-center">
                    <img :src="skill.logo" :alt="skill.name" loading="lazy">
                  </div>
                  <center>{{ skill.name }} <i class="bi bi-hand-index"></i></center>
                  <br>
                  <!-- <center> <a href="#">More...</a></center> -->
                  <div class="card-body">
                    <div class="logo text-center">
                      <img :src="skill.logo" :alt="skill.name" loading="lazy">
                    </div>
                  <p class="card-text text-center">{{ skill.name }}</p>
                  <p class="card-text"><span class="bold">Level </span>: {{ skill.Level }} </p>
                  <p class="card-text"><span class="bold">Comment </span>: {{ skill.Description }} </p>
                
                </div>
                </div>
            
            </div>
          </div>
        </div>
      </div>
      <!-- work experince section -->
      <section id="work"></section>
      <div class="holder">
        <center>
          <h1>Work</h1>
        </center>
        <div class="container-fluid">
          <div class="card" v-for="work in work" :key="work.id">    
                  <div class="logo text-center">
                    <img :src="work.image" class="card-img-top" :alt="work.institution" loading="lazy">
                  </div>
                  <center>{{ work.institution }} <i class="bi bi-hand-index"></i></center>
                  <br>

                  <div class="card-body">
                    <div class="logo text-center">
                      <img :src="work.image" class="card-img-top" :alt="work.institution" loading="lazy">
                    </div>
                  <p class="card-title"> <span class="bold">Name </span> : {{ work.institution }}</p>
                  <p class="card-title"> <span class="bold">Role </span> : {{ work.role }}</p>
                  <p class="card-title"> <span class="bold">Duration </span> : {{ work.duration }}</p>
                  <p class="card-title"> <span class="bold"> Reason for leaving</span> : {{ work.reason }}</p>
                  <p class="card-title"> <span class="bold"> Duties </span> : {{ work.duties }}</p>            
                </div>
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
  },
  name: 'ResumeView',
  components: {
    //  import registered here
  
  }
};
</script>

<style scoped>
:root {
  ---background-color2 :#004d7a;
  ---alternative-color: gray;
  ---text-color:white;
  --background-color: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  ---second-color: rgba(10, 18, 33, 0.59);
}

/*the info that must disapear*/


a{
  color: white;
  margin-top: 10px ;
text-decoration: none;
background-color: black;
padding: 10px 20px;
}
.card-body img{
  width: 5rem;
  height:5rem;
}
.card-body {
  position: fixed; /* Change position to fixed */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: auto;
  background-color: var(---background-color2);
  /* background-image: url("https://cdn.pixabay.com/photo/2023/07/14/08/45/futuristic-city-8126526_1280.jpg");
  background-size: cover; */
  color: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: none;
  z-index: 1;
}
 

.card:hover .card-body {
  display: block;
  transition: ease-in;
}


.page {
   background-color: var(---background-color2);
}

h1 {
color:white;
}
 
.holder {
  margin: 4rem 0;
}

.container-fluid {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
}

.bold {
  font-weight: 900;
  font-size: 0.9rem;
  color: var(---second-color);
}

p {
  font-size: 0.9rem;
}

.container-fluid img {
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  aspect-ratio: 3/5;
  margin-top: 10px;
}

.image-holder img{
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  aspect-ratio: 3/5;
  border :none;
  border-radius: 50%;
}
.logo{
  margin-bottom: 10px;
}

.logo img {
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  aspect-ratio: 3/5;
  margin-top: 5px 0;
  border :2px solid white;
  border-radius: 10px;

}

.card {
  margin: 5px;
  background:rgba(0, 0, 0, 0.736);
  border-radius: 12px;
 width: 400px;
  color: white;
  transition: 1s;
  position: relative;
  margin-top: 40px;
}

.card:nth-child(1){
  animation:backInLeft; 
  animation-duration: 2s;
}

.card:nth-child(2){
  animation:backInDown; 
  animation-duration: 2s;
}
.card:nth-child(3){
  animation:backInRight; 
  animation-duration: 2s;
}
.card:nth-child(4){
  animation:backInLeft; 
  animation-duration: 2s;
}
.card:nth-child(5){
  animation:backInUp; 
  animation-duration: 2s;
}
.card:nth-child(6){
  animation:backInRight; 
  animation-duration: 2s;
}
/*  */
.card:nth-child(7){
  animation:backInLeft; 
  animation-duration: 2s;
}

.card:nth-child(8){
  animation:backInDown; 
  animation-duration: 2s;
}
.card:nth-child(9){
  animation:backInRight; 
  animation-duration: 2s;
}
.card:nth-child(10){
  animation:backInLeft; 
  animation-duration: 2s;
}
.card:nth-child(11){
  animation:backInUp; 
  animation-duration: 2s;
}
 

#skills {
  margin: 10%;
}

#education {
  margin: 10%;
}

#work {
  margin: 10%;
}

/********** RESPONSIVENESS *********/
@media(width < 900px) {
  .container-fluid {
    grid-template-columns: auto;
  }
}

/********** RESPONSIVENESS *********/
@media(width < 700px) {
  .container-fluid {
    grid-template-columns: auto;
  }
}

/********** RESPONSIVENESS *********/
@media(width < 400px) {
  .container-fluid {
    grid-template-columns: auto;
  }

  p {
    font-size: 10px;
  }

  .logo img {
    width: 35px;
    object-fit: contain;
    aspect-ratio: 3/5;

  }

  .bold {
    font-size: 10px;
  }


}
</style>
