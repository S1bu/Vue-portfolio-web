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
      <!-- 15 -->
      <div><i class="bi bi-airplane"></i></div> 
      <!-- 16 -->     
      <div><i class="bi bi-backpack2"></i></div>
      <!-- 17 -->
      <div><i class="bi bi-balloon"></i></div>
      <!-- 18 -->
      <div><i class="bi bi-bicycle"></i></div>
      <!-- 19 -->
      <div><i class="bi bi-brilliance"></i></div>
      </div>
      
    <div class="container">
      <div class="row">
     
      <div class="col">

        <h1>
          <span class="career">  {{ name }} {{ surname }}</span>
        </h1>
        <h5>
            {{ partOfSentence }} {{ career }}
          </h5>
          <br>
          <div class="row">
            <p style="margin: 0;padding: 0;">I am a full-stack web development student 💻 at Life Choices Academy, with 6 months 
              of experience working on real-world projects. I am currently seeking an internship related to software development.
               My passion lies within technology 🤖, more specifically web development, where I can use code to impact people's lives. 
               👨🏾‍💻.</p>
          </div>
         
          <p class="btn-holder">
            <a href="https://www.canva.com/design/DAFzGaltbBQ/aVX0PQq9XNzYPrfkzn_wiw/edit?utm_content=DAFzGaltbBQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">CV <i class="bi bi-file-text"></i></a>
          </p>
      </div>
      <div class="col text-center">
        <br>
        <br>
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
  background-size: cover;
  background-attachment: fixed;
}
.col  h1 {
  text-shadow: 2px 5px rgba(0, 0, 0, 0.432);
  animation: shakeY; 
  animation-duration: 5s;
  animation-iteration-count: infinite; /* This is correct */
}

.col p{
  padding-top: 30px;
}
.row p {
color: white;
}
 
.col a{
  text-decoration:none;
  background-color:white;
  font-weight: bold;
  color: black;
  padding: 10px 80px;
  box-shadow: 5px 10px rgba(0, 0, 0, 0.432);
  transition: 1s;
  border-radius: 10px;  
}
.col a:hover{
  background-color:black;
  color: white;
  box-shadow: none;
  transition: 1s;
}
.btn-holder{
  animation:backInLeft; 
  animation-duration: 2s;
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
  z-index: 1;
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

@media (width < 700px) {
  h1 {
    margin-top: 60%;
  }
  .col{
    text-align: center;
  }
.row{
  display: flex;
  flex-direction: column;
  margin: 5px;
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
  
