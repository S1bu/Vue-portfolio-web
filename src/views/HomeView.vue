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
    <div class="container">
      <div class="row">
     
      <div class="col">
        <h1>
          <span class="career">  {{ name }} {{ surname }}</span>
        </h1>
          <br>
          <h5>
            {{ partOfSentence }} {{ career }}
          </h5>
          <p>
            <a href="https://docs.google.com/document/d/1JjMBUvuxd-KF1SndmMJ8Iy3-VMUZNK2_MTNq18YFjpo/edit?usp=sharing">CV</a>
          </p>
      </div>
      <div class="col text-center">
        <!-- <img src="https://i.postimg.cc/KcJRrL6s/pic-of-me.png" atl="me" loading="lazy"> -->
        <img src="https://i.postimg.cc/R0Y36NgM/C12-Sibelsiso-Dyan-sp-2.png" atl="me" loading="lazy">
      </div>
    </div>
    </div>
  </div>
</template>
<style scoped>
:root {
  ---background-color2 :#004d7a;
  --background-color: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  ---main-color: midnightblue;
  ---second-color: rgba(10, 18, 33, 0.59);
}
.container{
  margin-top: 6%;
}
.career {
  color: var(---second-color);
  font-weight: 900;
}

.holder {
  
  background-color: #004d7a;
/*  background-image: var(--background-color); */
  background-size: cover;
  background-attachment: fixed;
}
.col p{
  padding-top: 30px;
}
.col a{
  text-decoration:none;
  background-color:black;
  color: white;
  padding: 10px 80px;
  border-radius: 100px 0px 100px 0px;
-webkit-border-radius: 100px 0px 100px 0px;
-moz-border-radius: 100px 0px 100px 0px;
  
}
.col a:hover{
  background-color:black;
  color: white;
}
.col img{
  width: 300px;
  height: 300px;
  object-fit: contain;
  aspect-ratio: 3/10;
  border-radius:50%;
  border:2px solid white;
  margin-top: 60px;
  background-color:white;
}
h1 {
  color: white;
  margin-top: 20%;
}

h5{
  color: white;
}
@media (width < 900px) {
  h1 {
    margin-top: 20%;
  }
}

@media (width < 600px) {
  h1 {
    margin-top: 60%;
  }
}
</style>
<script>
export default {
  data() {
    return {
      name: 'Sibusiso',
      surname: 'Dyan',
      partOfSentence: 'an aspiring',
      career: 'Software developer',
      image1: 'https://i.postimg.cc/T1ktSVTS/sibusisopic.png',
      backgroundImage: 'https://i.postimg.cc/pTwJhPP0/image-cool-bg.jpg'
    }
  }
}


</script>
  
