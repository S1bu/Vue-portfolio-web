<template>
  <NavBar />
  <div class="cursor-dot" data-cursor-dot></div>
    <div class="cursor-outline" data-cursor-outline></div>
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
  },
  mounted() {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    // document.body.style.cursor = 'none';
    window.addEventListener("mousemove", function(e){
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top:`${posY}px`
        }, {
            duration:500,fill:"forwards"
        });
    });
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
