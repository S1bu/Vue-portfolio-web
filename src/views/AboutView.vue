<template>
    <div class="holder">
        <div class="container">
          
                <div class="col">
                    <p>
                        <span class="bold">Name :</span> <br> {{ name }}
                    </p>
                    <p>
                        <span class="bold">Surname :</span> <br>{{ surname }}
                    </p>
                    <p>
                        <span class="bold">Languages :</span>
                        <ul>
                            <li>{{ language1 }}</li>
                            <li>{{ language2 }}</li>
                            <li>{{ language3 }}</li>
                        </ul>
                    </p>
                    <p>
                        <span class="bold">Hobbies :</span>
                        <ul>
                            <li>{{ hobbie1 }}</li>
                            <li>{{ hobbie2 }}</li>
                            <li>{{ hobbie3 }}</li>
                            <li>{{ hobbie4 }}</li>
                            <li>{{ hobbie5 }}</li>
                        </ul>
                    </p>
                    <p>
                        <span class="bold">Address :</span> <br>{{ Town }} <br>{{ city }} <br> {{ Province }} <br> {{ country }} <br> {{ postalCode }}
                    </p>
                </div>
                <div class="col text-center">
                    <img :src="image1" :alt="name">
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                image1 : 'https://i.postimg.cc/T1ktSVTS/sibusisopic.png',
                name : 'Sibusiso',
                surname : 'Dyan',
                language1 :'Isixhosa',
                language2:'English',
                language3:'Isizulu',
                country : 'South Africa',
                Province:'Western Cape',
                Town:'Gugulethu',
                city:'Cape Town',
                postalCode:'7460',
                hobbie1:'Coding',
                hobbie2:'Googling new technology',
                hobbie3:'Reading personal development e-books',
                hobbie4:'Watching sci-fi movies ',
                hobbie5:'Hiking'
            };
        }
    }

   
</script>

<style scoped>
:root{
    --background-color:linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
      ---main-color :midnightblue;
      ---second-color : rgba(10, 18, 33, 0.59);
  }
.holder{
   background-image: var(--background-color);
  }

  .container{
    display: grid;
    grid-template-columns: auto auto;
  }
.bold{
    font-size: 1.5rem;
    font-weight: 900;
    color: var(---second-color);
}
  p{
    color:white
  }
  img{
    width: 18rem;
    height: 25rem;
    rotate: 30deg;
    background-image: none;
    border-radius: 100px;
    margin-top: 40px;
  }
  .col{
    margin-top: 10px;
    backdrop-filter: blur(6px) saturate(165%);
    -webkit-backdrop-filter: blur(6px) saturate(165%);
    background-color: var(---second-color);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    color: white;
    transition: 1s;
    padding-left: 10px;
    margin: 2px;
  }
  @media(width < 600px){
    .holder{
        margin-right: 3px;
    }
    .row {
        display: flex;
        flex-direction: column;
     }
  .col img{
    width: 10rem;
    height: 15rem;
  }
  .container{
    display: grid;
    grid-template-columns: auto;
  }
}
</style>