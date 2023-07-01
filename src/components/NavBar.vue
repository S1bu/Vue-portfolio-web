<template>
    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <div class="navbar-brand"><img src="https://i.postimg.cc/q7sz3thW/logo-sibusiso-Dyan.png" alt=""></div></div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/resume">Resume</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/project">Project</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/testimonials">Testimonials</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
          </div>
        
       
      </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>