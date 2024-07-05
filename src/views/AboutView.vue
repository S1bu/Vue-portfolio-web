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
        <h4><i class="bi bi-person-circle"></i> Who am I:</h4>
      
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
<br>
<br>
<br>
<br>
<h4 class="text-center"><i class="bi bi-code"></i> Technical skills <i class="bi bi-code-slash"></i></h4>
<div class="skill-section">
  <div class="skill-card" v-for="skill in skill" :key="skill.id"  data-aos="fade-up">
    <p><strong>{{skill.id}}. {{ skill.name }}</strong></p>
</div>
</div>
<br>
<br>
<br>
<br>
  <div class="row detail-holder">
    <h4 class="text-center">Favourite Quotes <i class="bi bi-chat-quote"></i></h4>

    <div class="quote-card" v-for="quote in Quotes" :key="quote.id"  data-aos="fade-up">
      <div class="row">
        <div class="col-2">
          <img :src="quote.image" alt="">
        </div>
        <div class="col-10">
          <p>"{{quote.Quote}}"</p>
          <p>~ {{ quote.name }} ~</p>
        </div>
      </div>
    </div>
 
  </div>
  <br>
  <br>
  <br>
  <br>
     
</div>
</template>

<script>
export default {
  computed: {
        Quotes() {
            return this.$store.state.quotes
        },
        skill() {
      return this.$store.state.skill
    }
    },
    mounted() {
        this.$store.dispatch('fetchQuotes'),
        this.$store.dispatch('fetchSkills')
    },
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
/*
Skills Section
*/
 .skill-section{
  display:grid;
  grid-template-columns: auto auto auto auto auto;
  justify-content: space-evenly;

  width:98%;
  border-radius:50px;
  height: 50vh;
  background-image: url('https://wallpaperaccess.com/full/2820622.jpg');
  background-size: cover;
  background-attachment: fixed;
margin: 1%;
 }
.skill-card{
  padding:20px;
}
 
.skill-card p{
  font-size:20px;
  font-weight: 600;
}
/* 
Quotes section
*/
.quote-card{
  width: 60%;
  margin: 3% 0;
  background-color: black;
  border: 2px solid white;
  border-radius: 0px 50px 0px 50px;
-webkit-border-radius: 0px 50px 0px 49px;
-moz-border-radius: 0px 50px 0px 49px;
box-shadow: 5px 10px rgba(0, 0, 0, 0.432);
}

.quote-card:nth-child(odd){
  margin-left:35%;
}
.quote-card:nth-child(even){
  margin-left: 5%;
}
 
.quote-card p{
  color:white;
  margin-top:5%;
}

.quote-card .col{
  border:1px solid red
}
.col-2{
  order:1px solid red
}
.col-2 img{
  margin-top:30px;
  width:100px;
  height:100px;
  border: 2px solid white;
  border-radius: 50%;
  object-fit: cover;
  border:2px solid white
}

/*------*/
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
  .quote-card:nth-child(odd){
    margin-left:0 2%;
  }
  .quote-card:nth-child(even){
    margin-left:0 2%;
  }
  .quote-card{
    width: 98%;
  }
 
}
@media screen and (max-width: 700px) {
  
 .detail-holder{
display: flex;
flex-direction: column;
}
.quote-card:nth-child(odd){
  margin-left:0 2%;
}
.quote-card:nth-child(even){
  margin-left:0 2%;
}
.quote-card{
  width: 98%;
}


}
@media(width < 400px) {
  .quote-card:nth-child(odd){
    margin-left:0 2%;
  }
  .quote-card:nth-child(even){
    margin-left:0 2%;
  }
  .quote-card{
    width: 98%;
  }
 
}
</style>
