<template>
  <div class="page">

    <div class="resume ">
      <section id="education"></section>
      <!-- educatioin section -->
      <div class="holder">
        <center>
          <h1>Education</h1>
        </center>
        <div class="container-fluid">
          <div class="edu-holder">
            <div class="edu-card"  v-for="education in education" :key="education.id">
              <div class="edu-title">
            <center>
              <h4>{{ education.name }} - {{ education.year }}</h4>
            </center>
           </div>
              <div class="edu-content">
              <!-- the logo -->
           <div class="edu-img text-center">
            <img :src="education.logo" :alt="education.name" loading="lazy">
           </div>
              

              
              <!-- info -->
              <div class="info">
                <p class="card-text"> Qualification: {{ education.Qualification }}</p>
                <p class="card-text"> Course: {{ education.Level }}</p>
                <p class="card-text"> Year: {{ education.year }}</p>    
              </div>
              </div>
        </div>
          </div>
          
          <!-- <div class="card"  v-for="education in education" :key="education.id">  
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
                </div> -->
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
/* ------------------------------------------- */
/* education section */
/* ------------------------------------------- */
h4{
  font-weight: 900;
  color: white;
  background-color: black;
  padding: 10px;
  -webkit-border-top-left-radius: 10px;
-webkit-border-top-right-radius: 10px;
-moz-border-radius-topleft: 10px;
-moz-border-radius-topright: 10px;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
}
.edu-holder{
  display: grid;
  grid-template-columns: auto auto;
  /* border: 1px solid red; */
}

.info p{
color: white;
}

.edu-card{
  width: 500px;
  margin: 10px;
 border-radius: 20px;
}
.edu-card:nth-child(odd){
  animation:backInLeft; 
  animation-duration: 2s;
}
.edu-card:nth-child(even){
  animation:backInRight; 
  animation-duration: 2s;
}
.edu-card:hover .edu-content{
  opacity: 1;
  transition: 1s;
}
/* edu stuff */
/* Garlandale */
.edu-card:nth-child(1){
  background-image: url('https://i.postimg.cc/zXTBtjfC/Screenshot-2023-11-02-093721.png');
  background-size: cover;
}
/* Jg meiring */
.edu-card:nth-child(2){
  background-image: url('https://i.postimg.cc/SjFrfrxT/Screenshot-2023-11-02-093329.png');
  background-size: cover;
}
/* silulo */
.edu-card:nth-child(3){
  background-image: url('https://i.postimg.cc/FHxZ005p/Screenshot-2023-11-02-093034.png');
  background-size: cover;
}
/* capacit 1 */
.edu-card:nth-child(4){
  background-image: url('https://i.postimg.cc/PxNYhDmh/Screenshot-2023-11-02-145211.png');
  background-size: cover;
}
/* It varsity */
.edu-card:nth-child(5){
  background-image: url('https://i.postimg.cc/GmgLBsfT/Screenshot-2023-11-02-091425.png');
  background-size: cover;
}
/* capaciti 2 */
.edu-card:nth-child(6){
  background-image: url('https://i.postimg.cc/DfHtHPXz/Screenshot-2023-11-02-091053.png');
  background-size: cover;
}
/* life choices */
.edu-card:nth-child(7){
  background-image: url(' https://i.postimg.cc/3JM3mT99/Screenshot-2023-11-02-091259.png');
  background-size: cover;
}
/* --------- */

.edu-content{
  background-color: rgba(0, 0, 0, 0.736);
  width:480px;
  margin: 10px;
  text-align: center;
  opacity: 0;
  transition: 1s;
  border-radius: 10px;
}

.edu-content img{
  object-fit: contain;
  aspect-ratio: 3/5;
  width: 70px;
  height: 70px;
  /* border: 1px solid red; */
  
}
/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */



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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: auto;
  background-color: var(---background-color2);
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
  animation:fadeIn; 
  animation-duration: 2s;
}


.page {
   background-color: var(---background-color2);
}

h1 {
  color:white;
  text-shadow: 2px 5px rgba(0, 0, 0, 0.432);
  font-weight: 900;
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
