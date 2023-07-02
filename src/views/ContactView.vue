<template>
  <div class="contact">
    <div class="container" >
      <form>
        <div class="mb-3">
          <label for="exampleInputFirstName" class="form-label">First name</label>
          <input type="firstname" class="form-control" id="firstname">
        </div>
        <div class="mb-3">
          <label for="exampleInputLastName" class="form-label">last name</label>
          <input type="lastname" class="form-control" id="lastname">
        </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Message</label>
              <textarea type="message" class="form-control" id="message"></textarea>
            </div>
         
          <button type="submit" class="btn btn-primary" v-on:click="validation">Submit</button>
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
 
.container{
    background-color: rgba(255, 255, 255, 0.244);
    border: 3px solid white;
    border-radius: 10px;
    width: 70%;
}
</style>