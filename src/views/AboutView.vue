<template>
    <div class="holder">
        <div class="container">
            <div class="row">
                <div class="col">
                    <p>
                        <span class="bold text-primary">Name </span>: {{ name }}
                    </p>
                    <p>
                        <span class="bold text-primary">Surname </span> :{{ surname }}
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
                        <span class="bold text-primary">Address </span>: {{ Town }}
                    </p>
                </div>
                <div class="col text-center">
                    <img :src="image1" :alt="name">
                </div>
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
                Province:'Western Cape',
                Town:'Goodwood',
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
.bold{
    font-weight: 900;
}
  p{
    color:white
  }
  img{
    width: 300px;
    height: 400px;
  }
</style>