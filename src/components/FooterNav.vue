<template>
    <div class="containerFooter">
        <div class="footer">
            <div class="link">
      
              <div class="row">
                <div class="col">
                    <h3>Pages</h3>
                    <ul>
                    <li>
                        <router-link to="/">Home  <i class="bi bi-chevron-right"></i></router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/about">About  <i class="bi bi-chevron-right"></i></router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/resume">Work  <i class="bi bi-chevron-right"></i></router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/project">Project  <i class="bi bi-chevron-right"></i></router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/testimonials">Peer Review  <i class="bi bi-chevron-right"></i></router-link>
                        </li>
                        <li class="nav-item">
                          <router-link to="/contact"> Contact  <i class="bi bi-chevron-right"></i></router-link>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h3>Projects</h3>
                    <ul>
                        <li v-for="project in project" :key="project.id">
                            <a :href="project.showUrl" target="_blank">{{ project.project }} <i class="bi bi-chevron-right"></i></a>
                        </li>
                    </ul>
                    
                </div>
                <div class="col">
                    <h3>Follow me</h3>
                    <ul>
                        <li>
                            <a href="http://www.linkedin.com/in/sibusiso-dyan-0004" target="_blank"><i class="bi bi-linkedin"></i> Linkedin<i class="bi bi-chevron-right"></i></a>
                        </li>
                        <li>
                            <a href="https://github.com/S1bu" target="_blank"><i class="bi bi-github" style="color: white;"></i> Github  <i class="bi bi-chevron-right"></i></a> <!--github-->
                        </li>
                    </ul>
                    <h3>Contact me</h3>
                    
                    <a href="#"><i class="bi bi-whatsapp"></i>0609479185</a> 
                   
                    
                </div>
              </div>

                <p>Sibusiso Dyan Copyright &copy; {{ Year }} <!--current year with using javascript--></p>
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
  },
    data() {
        return {
            Year: new Date().getUTCFullYear() //getting the current year via javascript
        }
    }
}
</script>

<style scoped>
.bi-github {
    color: black;
}
.row{
    margin-top: 4%;
}

.footer {
    z-index: 900;
}

.bi{
    font-size:20px;
}
*{
    border: 1px solid none;
}
.bi-chevron-right{
    font-size: 10px;
}
ul{
    list-style-type: none;
}
a{
    text-decoration: none;
    color:gray;
    font-size:small;
    text-align: left;
    padding:10px;
    margin: 10px;
    margin-bottom:10px;
}
a:hover{
    border:1px solid white;
    border-radius: 10px;
}

@media (width < 700px) {
    .row{
        display:flex;
        flex-direction: column;
    }
}

</style>
