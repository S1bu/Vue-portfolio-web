<template>
  <div class="contact">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-8">
            <form  >
              <label for="Fname">First name</label><br>
              <input type="text" class="name" placeholder="Name">
              <p class="nameVlid"></p>
              <br>
              <label for="Lname">Last name</label><br>
              <input type="text" class="surname" placeholder="surname">
              <p class="surnameVlid"></p>
              <br>
              <label for="e-mail">e-mail</label><br>
              <input type="e-mail" class="e-mail" placeholder="@">
              <p class="emailVlid"></p>
              <br>
              <label for="message">Message</label><br>
              <textarea type="text" class="message" placeholder="Dear Sibusiso..."></textarea>
              <p class="messageVlid"></p>
              <!-- button -->
              <button type="button" class="submit btn" v-on:click="validation"><i class="bi bi-send"></i></button>
              </form>
          </div>
       
          <div class="col-sm-4 text-center">
            <div class="details">
              <p><i class="bi bi-whatsapp"></i> 0609479185</p>
              <p><i class="bi bi-telephone"></i> 0609479185</p>
            </div>
          </div>
        </div>
      </div>
  </div>
   
</template>

<script>
    export default {
      methods:{
        validation(){
          let inputName = document.querySelector('.name')  //targets the whole input
          let inputSurname =  document.querySelector('.surname') //target the whole input
          let inputMail = document.querySelector('.e-mail')
          let inputMessage = document.querySelector('.message')
 
 if(inputName.value == ''){
    document.querySelector('.nameVlid').innerHTML=`Error - insert your first Name`
    }
 
    
 if(inputSurname.value == ''){
    document.querySelector('.surnameVlid').innerHTML=`Error - insert your last name`
 }

 if(inputMail.value == ''){
    document.querySelector('.emailVlid').innerHTML=`Error - insert your e-mail`
 }

 
 if(inputMessage.value == ''){
    document.querySelector('.messageVlid').innerHTML=`Error - insert your message`
 }
      }
    
    }
  }
</script>

<style scoped>
:root{
  --background-color:linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
    ---main-color :midnightblue;
    ---second-color : rgba(10, 18, 33, 0.59);
}

.col-4{
 background-image: var(--background-color);
}
 .contact{
background-image: var(--background-color);
 }
.container-fluid{
  margin-top: 10px;
  color: white;
  background-color: var(---second-color);
    border-radius: 10px;
    width: 90%;
    padding: 30px;
    margin-top: 10%;
    margin-bottom: 10%;
}
.text-center{
  background-color: var(---second-color);
  animation: bounce; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; 
}
.details{
  margin-top: 10%;
}
.btn{
  background-color: var(---second-color);
  padding: 10px;
  color: white;
}
textarea{
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  border: none;
}
input{
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  border: none;
}
form p{
  color: red;
  font-weight: 800;
}
@media(width < 700px){
  .container {
     width: 100%;
   }
}

@media(width < 400px){
label{
  font-size: 10px;
}
::placeholder{
  font-size: 10px;
}
.ol-sm-8{
  margin-bottom: 10%;
}
.col-sm-4{
  margin-top: 10%;
}
form p{
  color: red;
  font-weight: 800;
  font-size: 10px;
}
}
</style>