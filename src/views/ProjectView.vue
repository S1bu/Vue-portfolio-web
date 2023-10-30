<template>
  <div class="project">
    <div class="card" v-for="project in project" :key="project.id">
      <div class="info">
        <div class="row">
          <h5 class="card-title">{{ project.project }}</h5>
          <p class="card-text">{{ project.Description }}</p>
        </div>
        <div class="row">
          <div class="col text-center">
            <a :href="project.codeUrl" target="_blank">
              <i class="bi bi-code"></i>
              code
            </a>
          </div>
          <div class="col text-center">
            <a :href="project.showUrl" target="_blank">
              <i class="bi bi-laptop"></i>
              view
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    project() {
      return this.$store.state.projects
    }
  },
  mounted() {
    this.$store.dispatch('fetchProjects')
  }
}
</script>

<style scoped>
:root {
  ---background-color2 :#004d7a;
  ---alternative-color: gray;
  ---text-color:white;


  --background-color: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  ---main-color: midnightblue;
  ---second-color: rgba(10, 18, 33, 0.59);
}

.card{
  background-image: url('https://i.postimg.cc/VkySz1Fg/spaceman3.jpg');
  background-size: cover;
  width: 400px;
  height: 40vh;
  border: 1px solid #004d7a;
  margin: 10px;
}

.info{
  background-color:rgba(0, 0, 0, 0.432);
  width: 95%;
  height: 95%;
  margin: 10px;
}

.row:first-child{
  position: absolute;
  top: 15px;
  padding: 60px;
  color: white;
}
.row{
  position: absolute;
  bottom: 10px;
  padding: 15px;
  width: 100%;
}

.row .col{
width: 90%;
}
a{
  background-color: white;
  padding: 10px 30px;
  width: 100%;
  text-decoration: none;
  color: black;
  font-weight: 900;
  border-radius: 10px;
}
/* .container {
  display: grid;
  grid-template-columns: auto auto auto;

} */
/* .center{
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
} */
/* 
.container img{
width: 200px;
height: 200px;
object-fit: contain;
aspect-ratio: 3/5;
border-radius:10px;
} */

.project {
  background-color:var(---background-color2);
  background-size: cover;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
}

/* .card {
  margin: 5px;
  text-align: center;
  backdrop-filter: blur(6px) saturate(165%);
  -webkit-backdrop-filter: blur(6px) saturate(165%);
  background:rgba(0, 0, 0, 0.736);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  color: white;
  transition: 1s;
} */
/* Animation */
/* .card:nth-child(1){
    animation:backInRight; 
  animation-duration: 2s;
}
.card:nth-child(2){
  animation:backInRight; 
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
    animation:backInLeft; 
  animation-duration: 2s;
}
.card:nth-child(6){
    animation:backInLeft; 
  animation-duration: 2s;
} */
 

/* i {
  padding: 10px;
}

.btn {
  background-color: var(---background-color2);
  color: white;
  /* box-shadow: 2px 2px rgba(0, 0, 0, 0.796); */


@media(width < 900px) {
  .container {
    grid-template-columns: auto;
  }
}

@media(width < 700px) {
  .container {
    grid-template-columns: auto;
  }
}

@media(width < 400px) {
  .card-title {
    font-size: 15px;
  }

  .card-text {
    font-size: 10px;
  }

  a {
    font-size: 10px;
  }
}</style>
