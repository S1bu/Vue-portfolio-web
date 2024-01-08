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
  background-image: url('https://i.ibb.co/7vRtwF9/8657539057c99d9e4242a66a624e1d6f.jpg');
  background-size: cover;
  background-position: center;
  width: 400px;
  height: 40vh;
  border: 1px solid #004d7a;
  margin: 10px;
  transition: 1s;
}

.card:nth-child(1):hover{
  background-image: url('https://i.postimg.cc/8cYkY7yq/Screenshot-2023-11-13-133258.png');
  background-position: center;
   background-size: cover;
}
.card:nth-child(2):hover{
  background-image: url('https://i.postimg.cc/NfFZW4LZ/Screenshot-2023-11-13-130830.png');
  background-position: center;
   background-size: cover;
}
.card:nth-child(3):hover{
  background-image: url('https://i.postimg.cc/W10WCCpX/Screenshot-2023-11-13-130613.png');
  background-position: center;
   background-size: cover;
}

.card:nth-child(4):hover{
  background-image: url('https://i.postimg.cc/15xD44RW/Screenshot-2023-11-13-133351.png');
  background-position: center;
   background-size: cover;
}
.card:nth-child(5):hover{
  background-image: url('https://i.postimg.cc/pTypcJ0W/Screenshot-2023-11-13-133155.png');
  background-position: center;
   background-size: cover;
}
.card:nth-child(6):hover{
  background-image: url('https://i.postimg.cc/5NbC5Lwr/Screenshot-2023-11-13-133010.png');
  background-position: center;
   background-size: cover;
}

.card:nth-child(7):hover{
  background-image: url('https://i.postimg.cc/GpCZZB76/Screenshot-2023-11-13-123042.png');
  background-position: center;
   background-size: cover;
}
.card:nth-child(8):hover{
  background-image:url('https://i.postimg.cc/6p6Jyx0P/Screenshot-2023-11-13-122407.png') ;
  background-position: center;
   background-size: cover;
}
.card:nth-child(9):hover{
  background-image: url('https://i.postimg.cc/QMd2qF6D/Screenshot-2023-11-13-124113.png');
  background-position: center;
   background-size: cover;
}

.card:nth-child(10):hover{
  background-image: url('https://i.postimg.cc/TGbwhJ7C/Screenshot-2023-11-13-131100.png');
  background-position: center;
   background-size: cover;
}

.card:nth-child(12):hover{
  background-image: url('https://i.postimg.cc/d0S8p0x9/Screenshot-2023-11-17-095445.png');
  background-position: center;
   background-size: cover;
}
.card:nth-child(11):hover{
  background-image: url('https://i.postimg.cc/Nf1P6CFw/Screenshot-2023-11-13-121835.png~');
  background-position: center;
   background-size: cover;
  transition: 1s;
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
