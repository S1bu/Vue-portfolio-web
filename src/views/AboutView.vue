<template>
  <div class="holder">
    <div class="bg">
      <div class="image-holder text-center">
        <h1> {{ name }} {{ surname }}</h1>
        <!-- <img src="https://i.postimg.cc/R0Y36NgM/C12-Sibelsiso-Dyan-sp-2.png" loading="lazy"> -->
        <img src="https://i.postimg.cc/R0Y36NgM/C12-Sibelsiso-Dyan-sp-2.png" atl="me" loading="lazy">
        <div class="row align-items-start">
          <center>
         
          </center>
          <div class="col col_1">
            <p>Languages:</p>
            <p>{{ language1 }}</p>
            <p>{{ language2 }}</p>
            <p>{{ language3 }}</p>
          </div>
          <div class="col col_2">
            <p>Hobbies:</p>
            <p>{{ hobbie1 }}</p>
            <p>{{ hobbie2 }}</p>
            <p>{{ hobbie3 }}</p>
            <p>{{ hobbie4 }}</p>
            <p>{{ hobbie5 }}</p>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      image1: 'https://i.postimg.cc/T1ktSVTS/sibusisopic.png',
      name: 'Sibusiso',
      surname: 'Dyan',
      language1: 'Isixhosa',
      language2: 'English',
      language3: 'Isizulu',
      country: 'South Africa',
      Province: 'Western Cape',
      Town: 'Gugulethu',
      city: 'Cape Town',
      postalCode: '7460',
      hobbie1: 'Coding👨🏾‍💻',
      hobbie2: 'Googling new technology🤖',
      hobbie3: 'Reading personal development e-books📚',
      hobbie4: 'Watching sci-fi movies 🍿🎬 ',
      hobbie5: 'Hiking⛰️🥾'
    };
  }
}


</script>

<style scoped>
:root {
  ---background-color2 :#004d7a;
  ---alternative-color: gray;
  ---text-color:white;
}
/* ------ MODAL  ------  */
/* --------------------- */
.going-up{
  animation:backInUp; 
  animation-duration: 2s;
}
.col_1{
  animation:backInRight; 
  animation-duration: 2s;
  border: 2px solid white;
  border-radius: 10px;
  margin: 5px; 
}
.col_2{
  animation:backInLeft; 
  animation-duration: 2s;
  border: 2px solid white; 
  width: 90%;
  border-radius: 10px;
  margin: 5px;
  
}
.row{
  background-color: rgba(0, 0, 0, 0.84) ;
  border: 2px solid white;
  margin: 5px;
  border-radius:10px ;
  /* width: 90%; */
}
.holder {
  background-color: var(---background-color2);
  width:100%;
}

p{
  color:white;
  margin-left: 10%;
}
h1{
  color: white;
  font-weight:900;
}
 
 
 .bg{
  background-image: url('https://wallpaperaccess.com/full/418162.png');
  background-attachment: fixed;
  background-size: cover;
  border: 2px solid #004d7a;
  border-radius: 10px;
  margin: 5px;
 }
 img {
  width: 200px;
  height: 200px;
  object-fit: contain;
  aspect-ratio: 3/5;
  background-image: none;
  border-radius:50%;
  border: 2px solid white; /* Add this line to create a border */
  background-color:rgba(0, 0, 0, 0.84) ;
}


@media(width < 900px) {
  .holder {
    margin-right: 3px;
  }

  
 
}

@media(width < 700px) {
  
  }


@media(width < 400px) {
}</style>
