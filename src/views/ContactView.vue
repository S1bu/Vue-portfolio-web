<template>
  <div class="contact">
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
            <button type="submit" class="submit btn"><i class="bi bi-send"></i></button>
          </form>
        </div>

        <div class="col-sm-4 text-center">
          <div class="details">
            <img src="https://i.postimg.cc/tR632Q4p/logo-img.png" loading="lazy" alt="logo">
            <div class="info">
              <p><i class="bi bi-whatsapp"></i> 0609479185</p>
              <p><i class="bi bi-telephone"></i> 0609479185</p>
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
  /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
}

.details {
  margin-top: 10%;
}

.details img {
  border-radius: 10px;
}

.info {
  margin-top: 10%;
}

.btn {
  background-color: var(---second-color);
  padding: 10px;
  color: white;
}

textarea {
  padding: 10px;
  width: 100%;
  border-radius: 10px;
  border: none;
}

input {
  padding: 10px;
  width: 100%;
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
}

@media(width < 400px) {
  label {
    font-size: 10px;
  }

  ::placeholder {
    font-size: 10px;
  }

  .ol-sm-8 {
    margin-bottom: 10%;
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