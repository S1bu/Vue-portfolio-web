<template>
    <div class="sideNav">
        <ul class="text-center">
            <hr>
            <li> <a href="#education"><i class="bi bi-mortarboard"></i><br> Education</a></li>
            <hr>
            <li> <a href="#skills"><i class="bi bi-graph-up-arrow"></i><br> Skills</a></li>
            <hr>
            <li> <a href="#work"><i class="bi bi-briefcase-fill"> <br></i> Work</a></li>
            <hr>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.sideNav{
    position: fixed;
    left: 0;
    top: 10%;
}
.sideNav a {
    text-decoration: none;
    color:  white;
}
 
.sideNav li{
    list-style-type: none;
    margin: 70% 0;
}
.sideNav li:hover{
    animation: tada; 
    animation-duration: 2s;
}
hr {
    border-bottom: 4px solid white;
    rotate: 90deg;
}
  
@media(width < 400px) {
    .sideNav{
        top: 20%;
        font-size: 10px;
    } 

 
  }
</style>