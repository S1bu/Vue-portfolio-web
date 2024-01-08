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
  background-image: url('https://i.pinimg.com/564x/4b/cb/f2/4bcbf2a9162fef1531edea51dc879d46.jpg');
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 40vh;
  border: 1px solid #004d7a;
  margin: 10px;
  transition: 1s;
}
.card:hover{
  border: black 1px solid;
  box-shadow: 2px 2px 20px black;
}
/* BMI calculator */
.card:nth-child(1):hover{
  background-image: url('https://i.ibb.co/NLJCZG1/Screenshot-2024-01-08-112948.png');
  background-position: center;
   background-size: cover;
}
/* tesla */
.card:nth-child(2):hover{
  background-image: url('https://i.ibb.co/Hngq36M/Screenshot-2024-01-08-123220.png');
  background-position: center;
   background-size: cover;
}
/* guess number */
.card:nth-child(3):hover{
  background-image: url('https://i.ibb.co/4VR8bKR/Screenshot-2024-01-08-112929.png');
  background-position: center;
   background-size: cover;
}
/* calculator */
.card:nth-child(4):hover{
  background-image: url('https://i.ibb.co/rkP2WFX/Screenshot-2024-01-08-112838.png');
  background-position: center;
   background-size: cover;
}
 
/* wordpress */
.card:nth-child(5):hover{
  background-image: url('https://i.ibb.co/BP9NCWf/Screenshot-2024-01-08-112754.png');
  background-position: center;
   background-size: cover;
}
/* netflix clone */ 
.card:nth-child(6):hover{
  background-image:url('https://i.ibb.co/jMr9z7v/Screenshot-2024-01-08-112719.png') ;
  background-position: center;
   background-size: cover;
}
/* mini blog */
.card:nth-child(7):hover{
  background-image: url('https://i.ibb.co/vxQ1tb7/Screenshot-2024-01-08-112659.png');
  background-position: center;
   background-size: cover;
}
/* image gallery */
.card:nth-child(8):hover{
  background-image: url('https://i.ibb.co/MZz61PG/Screenshot-2024-01-08-112513.png');
  background-position: center;
   background-size: cover;
  /* transition: 1s; */
}
/* foodie fanatix */
.card:nth-child(9):hover{
  background-image: url('https://i.ibb.co/0tkJ23b/Screenshot-2024-01-08-112442.png');
  background-position: center;
   background-size: cover;
}

.info{
  background-color:rgba(0, 0, 0, 0.763);
  width: 95%;
  height: 95%;
  margin: 10px;
    /* border: 1px solid red; */
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


.project {
  background-color:var(---background-color2);
  background-size: cover;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
}

@media(width < 900px) {
  .project {
    grid-template-columns: auto;
  }
}

@media(width < 700px) {
  .project {
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
