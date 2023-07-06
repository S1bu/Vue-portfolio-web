<template>
<div class="holder">
  <div class="box"> 
    <!-- 1st -->
    <div><i class="bi bi-laptop"></i></div> 
    <!-- 2 -->
    <div><i class="bi bi-github"></i></div>
    <!-- 3 -->
    <div><i class="bi bi-code-slash"></i></div>
    <!-- 4 -->
    <div><i class="bi bi-briefcase-fill"></i></div>
    <!-- 5 -->
    <div><i class="bi bi-android2"></i></div>
    <!-- 6 -->
    <div><i class="bi bi-whatsapp"></i></div>
    <!-- 7 -->
    <div><i class="bi bi-facebook"></i></div>
    <!-- 8 -->
    <div><i class="bi bi-android"></i></div>
    <!-- 9 -->
    <div><i class="bi bi-qr-code"></i></div>
    <!-- 10 -->
    <div><i class="bi bi-code"></i></div>
    <!-- 11 -->
    <div><i class="bi bi-android2"></i></div>
    <!-- 12 -->
    <div><i class="bi bi-facebook"></i></div>
    <!-- 13 -->
    <div><i class="bi bi-box"></i></div>
    <!-- 14 -->
    <div><i class="bi bi-bar-chart"></i></div>
</div>
  <div class="container text-center">
   <div class="row">
   </div>
      <div class="col">
        <h1>
          {{  name }} {{ surname }}
        <br>
        {{ partOfSentence }} <span class="career">{{ career }}</span>
        </h1>
      </div>
    </div>
  </div>
 
</template>
<style scoped>:root{
  --background-color:linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
    ---main-color :midnightblue;
    ---second-color : rgba(10, 18, 33, 0.59);
}
.career{
  color: var(---second-color);
  font-weight: 900;
}
.holder{
 background-image: var(--background-color);
  background-size: cover;
  background-attachment: fixed;
  
}
 h1{
  color:white;
  margin-top:20%;
 }

@media (width < 600px){
  h1{
    margin-top:60%;
   }  
}
</style>
<script>
export default {
  data(){
  return{
    name : 'Sibusiso',
    surname : 'Dyan',
    partOfSentence : 'an aspiring',
    career : 'Software developer',
    image1 : 'https://i.postimg.cc/T1ktSVTS/sibusisopic.png',
    backgroundImage :'https://i.postimg.cc/pTwJhPP0/image-cool-bg.jpg'
  }
 }
}

 
</script>
