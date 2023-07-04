<template>
<div class="holder">
  <div class="container text-center">
   
      <div class="col">
        <h1>
          {{  name }} {{ surname }}
        <br>
        {{ partOfSentence }} {{ career }}
        </h1>
 

      </div>
    </div>
  </div>
 
</template>
<style scoped>
.holder{
  background-color: midnightblue;
  background-size: cover;
  background-attachment: fixed;
  
}
 h1{
  color:white;
  margin-top:20%;
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
