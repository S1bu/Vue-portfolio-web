<template>
  <div class="page">

    <div class="resume">
      <section id="education"></section>
      <!-- educatioin section -->
      <div class="holder">
        <center>
          <h1>Education</h1>
        </center>
        <!-- <div class="container-fluid"> -->
          <div class="edu-holder">
            <div class="edu-card" v-for="education in education" :key="education.id" data-aos="fade-up">
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
        </div>


    </div>
    <section id="badges">
      <center>
        <h1>Badges</h1>
      </center>

      <div class="container-fluid">
        <div class="card curve" v-for="badge in badge" :key="badge.id" data-aos="fade-up">
          <h5>{{ badge.badge_name }}</h5>
          <div class="badge-image">
            <img :src="badge.badge_image" alt="">
          </div>
        </div>
      </div>
    </section>
    <!-- -------------------------------------- -->
    <!-- -------------------------------------- -->
    <!-- -------------------------------------- -->
    <section id="work"></section>
    <div class="holder">
      <center>
        <h1>Work</h1>
      </center>
      <div class="container-fluid">
        <div class="card" v-for="work in work" :key="work.id" data-aos="fade-up">
          <div class="logo text-center">
            <img :src="work.image" class="card-img-top" :alt="work.institution" loading="lazy">
          </div>
          <center>{{ work.institution }} <i class="bi bi-caret-down-fill"></i></center>
          <br>
          <div class="card-body">
          
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
   
    work() {
      return this.$store.state.work
    },
    badge() {
      return this.$store.state.badge
    },
  },
  mounted() {
    this.$store.dispatch('fetchEducation'),
      this.$store.dispatch('fetchSkills'),
      this.$store.dispatch('fetchWork'),
      this.$store.dispatch('fetchBadges')
  },
  name: 'ResumeView',
  components: {

  }
};
</script>

<style scoped>
.skills-card .Skill{
  color: white;
  
}
.skills-image-holder h2{
  color: white;
  font-size: 60px;
  font-weight: 600;
padding-top:25% ;
 
}
.skills-image-holder{
  text-align: center;
  background-image: url('https://i.pinimg.com/564x/3f/03/53/3f0353330f3ec129e62215cf2b3c14db.jpg');
  height: 50vh;
  width: 80%;
}
.skills-card p{
  border: 1px solid white;
  border-radius: 10px;
  text-align: center;
  background-color: black;
}

:root {
  ---background-color2: #004d7a;
  ---alternative-color: gray;
  ---text-color: white;
  --background-color: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  ---second-color: rgba(10, 18, 33, 0.59);
}
.card_1,.card_2,.card_3,.card_4,.card_5{
  color: white;
  width: 100%;
  border: 1px solid red;
}
.skillsCardHolder{
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  justify-content: space-around;
}
.skillsCardHolder h5{
  font-family: 900;
  background-color: none
  ;
}
/* ------------------------------------------- */
/* education section */
/* ------------------------------------------- */
h4 {
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

.edu-holder {
  display: grid;
  grid-template-columns: auto auto;
  margin-left: 10%;
}

.curve{
  rotate: -30deg;
  transition: 2s;
}
.curve:hover{
rotate: 0deg;
transition: 2s;
}
.info p {
  color: white;
}

.edu-card {
  width: 500px;
  margin: 10px;
  border-radius: 20px;
}

.edu-card:nth-child(odd) {
  animation: backInLeft;
  animation-duration: 2s;
}

.edu-card:nth-child(even) {
  animation: backInRight;
  animation-duration: 2s;
}

.edu-card:hover .edu-content {
  opacity: 1;
  transition: 1s;
}

/* ---------------------------------------------- */
/* edu stuff - mainly background images */

/* Jg meiring */
.edu-card:nth-child(6) {
  background-image: url('https://i.ibb.co/yFPvK3W/school-2017.jpg');
  background-size: cover;
}

/* silulo */
.edu-card:nth-child(5) {
  background-image: url('https://i.ibb.co/09Kcymf/Screenshot-2024-01-08-093500.png');
  background-size: cover;
}

/* capacit 1 */
.edu-card:nth-child(4) {
  background-image: url('https://i.ibb.co/5Tyn06h/Screenshot-2024-01-08-092658.png');
  background-size: cover;
}

/* It varsity */
.edu-card:nth-child(3) {
  background-image: url('https://i.ibb.co/HH0cs2M/Screenshot-2024-01-08-092815.png');
  background-size: cover;
}

/* capaciti 2 */
.edu-card:nth-child(2) {
  background-image: url('https://i.ibb.co/pX4zfxS/Screenshot-2024-01-08-092535.png');
  background-size: cover;
}

/* life choices */
.edu-card:nth-child(1) {
  background-image: url('https://i.ibb.co/Q62L6Cr/Screenshot-2024-01-08-093324.png');
  background-size: cover;
}

/* ----------------------------------------------------------------------------------------- */
/* edu stuff - mainly animation */
.edu-card:nth-child(odd) {
  animation: backInRight;
  animation-duration: 2s;
}

.edu-card:nth-child(even) {
  animation: backInLeft;
  animation-duration: 2s;
}

/* ------------------------------------------------------------------------------------------- */
.edu-content {
  background-color: rgba(0, 0, 0, 0.736);
  width: 95%;
  margin: 10px;
  text-align: center;
  /* opacity: 0; */
  transition: 1s;
  border-radius: 10px;
}

.edu-content img {
  object-fit: contain;
  aspect-ratio: 3/5;
  width: 70px;
  height: 70px;
}

/* ------------------------------------------- */
/* ------------------------------------------- */
/* ------------------------------------------- */



a {
  color: white;
  margin-top: 10px;
  text-decoration: none;
  background-color: black;
  padding: 10px 20px;
}

.card-body img {
  width: 5rem;
  height: 5rem;
}

.card-body {
   
 
  display: none;
 
}


.card:hover .card-body{
  display: block;
  animation: fadeIn;
  animation-duration: 2s;
  transition: 2s;
}


.page {
  background-color: var(---background-color2);
}

h1 {
  color: white;
  text-shadow: 2px 5px rgba(0, 0, 0, 0.432);
  font-weight: 900;
}

.holder {
  margin: 2% 5%;
}

.container-fluid {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
}

.container-fluid .card{
  width: 300px;
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

.image-holder img {
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  aspect-ratio: 3/5;
  border: none;
  border-radius: 50%;
}

.logo {
  margin-bottom: 10px;
}

.logo img {
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  aspect-ratio: 3/5;
  margin-top: 5px 0;
  border: 2px solid white;
  border-radius: 10px;

}

.card {
  margin: 5px;
  background: rgba(0, 0, 0, 0.736);
  border-radius: 12px;
  width:95%;
  color: white;
  transition: 1s;
  position: relative;
  margin-top: 40px;
}

.card:nth-child(1) {
  animation: backInLeft;
  animation-duration: 2s;
}

.card:nth-child(2) {
  animation: backInDown;
  animation-duration: 2s;
}

.card:nth-child(3) {
  animation: backInRight;
  animation-duration: 2s;
}

.card:nth-child(4) {
  animation: backInLeft;
  animation-duration: 2s;
}

.card:nth-child(5) {
  animation: backInUp;
  animation-duration: 2s;
}

.card:nth-child(6) {
  animation: backInRight;
  animation-duration: 2s;
}

/*  */
.card:nth-child(7) {
  animation: backInLeft;
  animation-duration: 2s;
}

.card:nth-child(8) {
  animation: backInDown;
  animation-duration: 2s;
}

.card:nth-child(9) {
  animation: backInRight;
  animation-duration: 2s;
}

.card:nth-child(10) {
  animation: backInLeft;
  animation-duration: 2s;
}

.card:nth-child(11) {
  animation: backInUp;
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

.badge-image,h5{
  text-align: center;
}
#badges .card{
padding: 10px;
}


/********** RESPONSIVENESS *********/
@media(width < 900px) {

  .container-fluid {
    grid-template-columns: auto auto;
  }
  .edu-holder{
  display: grid;
  grid-template-columns: auto;
  margin-left: 1%;
}
.edu-card{
  width: 95%;
}
.skills-image-holder{
    width: 100%;
  }
  .skills-image-holder{

  background-size: cover;
  background-repeat: no-repeat;
  height: 40vh;
  width: 100%;
}
}

/********** RESPONSIVENESS *********/
@media(width < 700px) {
  .container-fluid {
    grid-template-columns: auto;
  }

  .edu-holder {
    grid-template-columns: auto;
  }

  .card-body {
    width: 100%;
  }
  .skills-image-holder {
    width: 100%;
  }
 .skills-card .skill{
  margin-top: 1%;
 }
}

/********** RESPONSIVENESS *********/
@media(width < 400px) {
  .container-fluid {
    grid-template-columns: auto;
  }
  .skills-image-holder{
    width: 100%;
  }
  .card-body {
    width: 80%;
    margin: 0 10%;
  }

  p {
    font-size: 10px;
  }

  .logo img {
    width: 40%;
    object-fit: contain;
    aspect-ratio: 3/5;
    border: none;

  }

  .bold {
    font-size: 10px;
  }


}</style>
