<template>
  <div class="holder">
    <div class="bg">
      <div class="image-holder text-center">
        <h1> {{ name }} {{ surname }}</h1>
        <img src="https://i.postimg.cc/R0Y36NgM/C12-Sibelsiso-Dyan-sp-2.png" atl="me" loading="lazy">
      </div>
    </div>
    <div class="row">
      <div class="col text-center">
        <h4>Who am I:</h4>
        <p style="margin: 40px;padding: 0;">I am a full-stack web development student 💻 at Life Choices Academy, with 6 months 
              of experience working on real-world projects. I am currently seeking an internship related to software development.
               My passion lies within technology 🤖, more specifically web development, where I can use code to impact people's lives. 
               👨🏾‍💻.</p>
      </div>
            
          </div>
    <div class="row detail-holder">
      
       
          <div class="col hobbies text-center">
            <h4>Hobbies:</h4>
            <p>{{ hobbie1 }}</p>
            <p>{{ hobbie2 }}</p>
            <p>{{ hobbie3 }}</p>
            <p>{{ hobbie4 }}</p>
            <p>{{ hobbie5 }}</p>
          </div>
          <div class="col details text-center">
            <h4>Details:</h4>
          <p>Name:{{ name }} </p>
          <p>Surname:  {{ surname }}</p>
          <p>D.O.B:  {{ D_O_B }}</p>
          <p>Ethnicity: {{ Ethnicity }}</p>
          <p>country:{{ country }}</p>
          </div>
  </div>
     
</div>
</template>

<script>
export default {
  data() {
    return {
      Ethnicity:'African',
      D_O_B:'21-04-2000',
      image1: 'https://i.postimg.cc/T1ktSVTS/sibusisopic.png',
      name: 'Sibusiso',
      surname: 'Dyan',
      language1: 'Isixhosa',
      language2: 'English',
      language3: 'Isizulu',
      country: 'South Africa🌍',
      Province: 'Western Cape 📍',
      Town: 'Gugulethu',
      city: 'Cape Town',
      postalCode: '7460',
      hobbie1: 'Coding👨🏾‍💻',
      hobbie2: 'Exploring new technology🤖',
      hobbie3: 'learning new skills📚',
      hobbie4: 'Analyzing Forex charts 📈',
      hobbie5: 'Hiking⛰️🥾',
      inspiration1 :'Dan pena',
      inspiration_pic1: 'https://i.postimg.cc/dVjy5kR0/3c0ad48cb3992ee6456583bad2a69aa6.jpg',
      inspiration2:'Elon Musk',
      inspiration_pic2: 'https://i.postimg.cc/xTv4q1Q2/ac7e03044fb7469b99a3190165ffb1c2.jpg',
    };
  }
}


</script>

<style scoped>
:root {
  ---background-color2 :#043958;
  ---alternative-color: gray;
  ---text-color:white;
}
.insp-card{
  text-align: center;
  width: 300px;
  margin: 10px;
}

.insp-card img{
  width: 400px;
  height: 400px;
object-fit:contain
}
.card{
  background-color: rgba(0, 0, 0, 0.432);
  width: auto;
  text-align: center;
}
/* ------ MODAL  ------  */
/* --------------------- */
h4{
  text-shadow: 2px 5px rgba(0, 0, 0, 0.432);
  color: white;
  font-weight: 900;
}
.going-up{
  animation:backInUp; 
  animation-duration: 2s;
}
.col_1{
  animation:backInRight; 
  animation-duration: 2s;
  /* border: 2px solid white; */
  border-radius: 10px;
  margin: 5px; 
}
.col_2{
  animation:backInLeft; 
  animation-duration: 2s;
  /* border: 2px solid white;  */
  width: 90%;
  border-radius: 10px;
  margin: 5px;
  
}
.row{
  /* border: 2px solid white; */
  margin: 5px;
  border-radius:10px ;
}
.holder {
  background-color: var(---background-color2);
  width:100%;
}

p{
  color:white;
  /* margin-left: 10%; */
}
h1{
  color: white;
  font-weight:900;
}
 
 
 .bg{
  background-image: url('https://wallpaperaccess.com/full/418162.png');
  background-attachment: fixed;
  background-size: cover;
  border: 2px solid #043958;
  border-radius: 10px;
  margin: 5px;
 }
.image-holder img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  aspect-ratio: 3/5;
  background-image: none;
  border-radius:50%;
  border: 2px solid white; /* Add this line to create a border */
  background-color:rgba(0, 0, 0, 0.84) ;
}

.details >p:nth-child(even){
  background-color: rgba(0, 0, 0, 0.448);
  margin: 0 7%;
}
.hobbies >p:nth-child(even){
  background-color: rgba(0, 0, 0, 0.448);
  margin: 0 7%;
}
@media(width < 900px) {
  .holder {
    margin-right: 3px;
  }

  
 
}
@media screen and (max-width: 700px) {
  
 .detail-holder{
display: flex;
flex-direction: column;
}

}
@media(width < 400px) {
}
</style>
