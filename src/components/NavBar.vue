<template>
    <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid link">
          <div class="navbar-brand"><img src="https://i.postimg.cc/q7sz3thW/logo-sibusiso-Dyan.png" alt=""></div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/">
                  <i class="bi bi-house"></i> Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/about">
                  <i class="bi bi-person-circle"></i> About </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/resume"><i class="bi bi-briefcase"></i> Resume</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/project"><i class="bi bi-laptop"></i> Project</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/testimonials"><i class="bi bi-chat-dots"></i> Testimonials</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact"> <i class="bi bi-telephone"></i> Contact</router-link>
              </li>
            </ul>
          </div>
        
        </div>
      </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>