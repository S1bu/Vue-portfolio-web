<template>
    <div class="holder">
        <div class="container">
          
                <div class="col">
                    <p>
                        <span class="bold text-primary">Name </span>: <br> {{ name }}
                    </p>
                    <p>
                        <span class="bold text-primary">Surname </span> : <br>{{ surname }}
                    </p>
                    <p>
                        <span class="bold text-primary">Languages </span>
                        <ul>
                            <li>{{ language1 }}</li>
                            <li>{{ language2 }}</li>
                            <li>{{ language3 }}</li>
                        </ul>
                    </p>
                    <p>
                        <span class="bold text-primary">Hobbies </span>
                        <ul>
                            <li>{{ hobbie1 }}</li>
                            <li>{{ hobbie2 }}</li>
                            <li>{{ hobbie3 }}</li>
                            <li>{{ hobbie4 }}</li>
                            <li>{{ hobbie5 }}</li>
                        </ul>
                    </p>
                    <p>
                        <span class="bold text-primary">Address </span>: <br>{{ Town }} <br>{{ city }} <br> {{ Province }} <br> {{ country }} <br> {{ postalCode }}
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
.holder{
    background-color: midnightblue;
  }

  .container{
    display: grid;
    grid-template-columns: auto auto;
  }
.bold{
    font-weight: 900;
}
  p{
    color:white
  }
  img{
    width: 18rem;
    height: 25rem;
    rotate: 30deg;
    background-color: midnightblue;
    border-radius: 100px;
    margin-top: 40px;
  }
  .col{
    margin-top: 10px;
    backdrop-filter: blur(6px) saturate(165%);
    -webkit-backdrop-filter: blur(6px) saturate(165%);
    background-color: rgba(10, 18, 33, 0.91);
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