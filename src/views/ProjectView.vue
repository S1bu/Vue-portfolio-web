<template>
  <div class="project">
    <div class="container">
      <div class="card" v-for="project in project" :key="project.id">
        <div class="projectImg">
          <img :src="project.image" class="card-img-top" alt="project.project" loading="lazy">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ project.project }}</h5>
          <p class="card-text">{{ project.Description }}</p>
          <div class="row">
            <div class="col">
              <a :href="project.codeUrl" class="btn" target="_blank">
                <i class="bi bi-code"></i>
                <br>
                code
              </a>
            </div>
            <div class="col">
              <a :href="project.showUrl" class="btn" target="_blank">
                <i class="bi bi-laptop"></i>
                <br>
                view
              </a>
            </div>
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

.container {
  display: grid;
  grid-template-columns: auto auto auto;

}

.container img{
width: 200px;
height: 200px;
object-fit: contain;
aspect-ratio: 3/5;
border-radius:10px;
}

.project {
  background-color:var(---background-color2);
  background-size: cover;
}

.card {
  margin: 5px;
  text-align: center;
  backdrop-filter: blur(6px) saturate(165%);
  -webkit-backdrop-filter: blur(6px) saturate(165%);
  background:rgba(0, 0, 0, 0.736);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  color: white;
  transition: 1s;
}

i {
  padding: 10px;
}

.btn {
  background-color: var(---background-color2);
  color: white;
}

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
