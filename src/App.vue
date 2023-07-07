<template>
  <NavBar />
  <router-view />
  <FooterNav />
</template>

<script>
//  import comes here
import NavBar from './components/NavBar.vue';
import FooterNav from './components/FooterNav.vue';

export default {
  name: 'App',
  components: {
    //  import registered here
    NavBar,
    FooterNav,

  }
}
</script>

<style src="@/assets/style/style.css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
