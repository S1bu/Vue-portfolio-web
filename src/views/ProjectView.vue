<template>
    <div class="project">
        <div class="container">
            <div class="card" v-for="project in project"  :key="project.id">
                <img :src="project.image" class="card-img-top" alt="project.project">
                <div class="card-body">
                  <h5 class="card-title">{{ project.project }}</h5>
                  <p class="card-text">{{ project.Description }}</p>
                  <div class="row">
                    <div class="col">
                        <a :href="project.codeUrl" class="btn btn-primary" target="_blank">
                            <i class="bi bi-code"></i> 
                            <br>
                            code
                        </a>
                      </div>
                      <div class="col">
                        <a :href="project.showUrl" class="btn btn-primary" target="_blank">
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
        project(){
            return this.$store.state.projects
        }
    },
    mounted() {
        this.$store.dispatch('fetchProjects')
    }
}
</script>

<style scoped>
:root{
    --background-color:linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
      ---main-color :midnightblue;
      ---second-color : rgba(10, 18, 33, 0.59);
  }
.container {
    display: grid;
    grid-template-columns: auto auto auto;
     
}
.container img{
    object-fit:contain;
    aspect-ratio: 3/2;
}
.project{
 background-image: var(--background-color);
    background-size: cover ;
}
.card {
    margin: 5px;
    text-align: center;
    backdrop-filter: blur(6px) saturate(165%);
    -webkit-backdrop-filter: blur(6px) saturate(165%);
    background-color: var(---second-color);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    color: white;
  transition: 1s;
}
i{
    padding: 10px;
}

@media(width < 600px){
    .container {
        grid-template-columns: auto; 
     }
}

</style>