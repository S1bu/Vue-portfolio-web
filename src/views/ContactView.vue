<template>
  <div class="contact">
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
      <!-- --- -->
      <!-- --- -->
      <!-- --- -->
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
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-8">
          <form action="https://formspree.io/f/mpzebbdr" method="POST">
            <label for="Fname">First name</label><br>
            <input type="text" class="name" name="name" placeholder="Name" required
              oninvalid="this.setCustomValidity('Please enter your name')" oninput="this.setCustomValidity('')">
            <p class="nameVlid"></p>
            <br>
            <label for="Lname">Last name</label><br>
            <input type="text" class="surname" name="last name" placeholder="surname" required
              oninvalid="this.setCustomValidity('Please enter last name')" oninput="this.setCustomValidity('')">
            <p class="surnameVlid"></p>
            <br>
            <label for="e-mail">e-mail</label><br>
            <input type="e-mail" class="e-mail" name="e-mail" placeholder="@" required
              oninvalid="this.setCustomValidity('Please enter e-mail')" oninput="this.setCustomValidity('')">
            <p class="emailVlid"></p>
            <br>
            <label for="message">Message</label><br>
            <textarea type="text" class="message" name="message" placeholder="Dear Sibusiso..." required
              oninvalid="this.setCustomValidity('Please enter message')" oninput="this.setCustomValidity('')"></textarea>
            <p class="messageVlid"></p>
            <!-- button -->
            <button type="submit" class="submit btn">Send <i class="bi bi-chat-quote"></i></button>
          </form>
        </div>

        <div class="col-sm-4 text-center">
          
          <div class="details">
            <p><b>Connect with me !</b></p>
            <img src="https://i.pinimg.com/564x/d4/eb/69/d4eb6905a5764311765111dd1d8cc52a.jpg" loading="lazy" alt="logo" width="300">
            <div class="info">
              <p><i class="bi bi-whatsapp"></i> 0609479185</p>
              <p><i class="bi bi-linkedin"></i> www.linkedin.com/in<br>/sibusiso-dyan-0004</p>
              <P><i class="bi bi-geo-alt"></i> South Africa,Cape town,Gugulethu</P>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>

<style scoped>
:root {
  ---background-color2 :#004d7a;
  ---alternative-color: gray;
  ---text-color:white;

  --background-color: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  ---main-color: midnightblue;
  ---second-color: rgba(10, 18, 33, 0.59);
}

.col-4 {
  background-color: var(---second-color);
}

.contact {
  background-color: var(---background-color2);
}

.container-fluid {
  margin-top: 10px;
  color: white;
  background-color: var(---second-color);
  border-radius: 10px;
  width: 90%;
  padding: 30px;
  margin-top: 10%;
  margin-bottom: 10%;
}

.text-center {
  background-color: var(---second-color);
  animation: bounce;
  animation-duration: 2s;
}

.details {
  padding: 10px 0;
  margin: 10px;
  /* margin-top: 10%; */
  background-color: rgba(0, 0, 0, 0.736);
}

.details img {
  border-radius: 10px;
  padding-top: 40px;
}

.info {
  margin-top: 10%;
}

.btn {
  text-decoration:none;
  background-color:white;
  font-weight: bold;
  color: black;
  padding: 10px 80px;
  box-shadow: 5px 10px rgba(0, 0, 0, 0.432);
  transition: 1s;
  border-radius: 10px; 
  /* animation */
  animation:backInLeft; 
  animation-duration: 2s;
}
.btn:hover{
  background-color:black;
  color: white;
  box-shadow: none;
  transition: 1s;
}

textarea {
  padding: 10px;
  width: 70%;
  border-radius: 10px;
  border: none;
}

input {
  padding: 10px;
  width: 70%;
  border-radius: 10px;
  border: none;
}

form p {
  color: red;
  font-weight: 800;
}

@media(width < 900px) {
  .container {
    width: 100%;
  }
}

@media(width < 700px) {
  .container {
    width: 100%;
  }

  img{
    width: 80px;
  }
.col-sm-4,.col-sm-8{
  width: 100%;
  margin-bottom: 10px;
}

.col-sm-8{
  text-align: center;
}
}

@media(width < 400px) {
  label {
    font-size: 10px;
  }

  ::placeholder {
    font-size: 10px;
  }

  .col-sm-8 {
    margin-bottom: 10%;
    text-align: center;
  }

  .col-sm-4 {
    margin-top: 10%;
  }

  form p {
    color: red;
    font-weight: 800;
    font-size: 10px;
  }
}</style>
