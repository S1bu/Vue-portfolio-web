<template>
    <div class="contact">
      <div class="container" >
        <form>
          <div class="mb-3">
            <label for="exampleInputFirstName" class="form-label">First name</label>
            <input type="firstname" class="form-control" id="firstname" >
          </div>
          <div class="mb-3">
            <label for="exampleInputLastName" class="form-label">last name</label>
            <input type="lastname" class="form-control" id="lastname" >
          </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" >
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Message</label>
                <textarea type="message" class="form-control" id="message" placeholder="Write message"></textarea>
              </div>
           
            <button type="submit" class="btn" v-on:click="validation"><i class="bi bi-send-fill"></i></button>
          </form>
    </div>
  
    </div>
     
  </template>
  
  <script>
      export default {
        methods:{
          validation(){
            let firstname = document.querySelector('#firstname').value
            let lastname =document.querySelector('#lastname').value
            let email =document.querySelector('#email').value
            let message = document.querySelector('#message').value
           if(firstname == '' || lastname == '' || email == '' || message == '' ){
            alert('Please fill in all details before submitting')
           }else{
            alert('Message sent')
            // give the button a type of submit in order to submit the form details
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
   .contact{
  background-image: var(--background-color);
   }
  .container{
    margin-top: 10px;
    color: white;
    background-color: var(---second-color);
      border-radius: 10px;
      width: 70%;
      padding: 30px;
      margin-top: 10%;
  }
  .btn{
    background-color: var(---second-color);
    padding: 10px;
    color: white;
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
  }
  </style>