<template >
    <div class="testimonial">
        <br>
 <h1>What my peers have to say about me</h1>
         <div class="testi-holder">

         
                <div class="row text-center" v-for="testimonial in testimonials" :key="testimonial.id"  data-aos="fade-right">
             
               <div class="testi-image-holder">

               </div>
               
               <p>"{{ testimonial.Description }}"</p> 
            </div>
               
        </div>
    </div>
  
</template>

<script>
export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        }
    },
    mounted() {
        this.$store.dispatch('fetchTestimonials')
    }
}
</script>

<style  scoped>
.testi-holder{
    margin: 10% 0;
}
.testimonial{
    background-color: #043958;
  padding:0 10%;
}
h1 {
  color: white;
  text-shadow: 2px 5px rgba(0, 0, 0, 0.432);
  font-weight: 900;
}
 
p{
    color: white;
}

img{
    width: 80px;
    height: 80px;
    object-fit: contain;
    aspect-ratio: 3/5;
    border: 2px solid white;
  
}
 
.row{
    width: 100%;
    border: 2px solid white;
    background-color: black;
    margin: 2%;
   border-radius:20px ;
}

.testi-image-holder{
    border-radius: 20px;
    background-size: cover;
    height:45vh;
    width: 100%;
    margin-bottom: 2%;
}

 .row:nth-child(1) .testi-image-holder{
    background-image: url('https://i.ibb.co/18vK5vR/jason.png');
 }
 .row:nth-child(2) .testi-image-holder{
    background-image: url('https://i.ibb.co/ZxntXbb/alonso.png');
    
 }
 .row:nth-child(3) .testi-image-holder{
    background-image: url(' https://i.ibb.co/tK0gLJd/tara.png');
    
 }
 .row:nth-child(4) .testi-image-holder{
    background-image: url(' https://i.ibb.co/CtJvr7P/waydin.png');
  
 }
 .row:nth-child(5) .testi-image-holder{
    background-image: url('https://i.ibb.co/QMdRzwK/Kgodisho.png');
 }


 /* ------------------------- */
 /*------respinsiveness---*/
 @media(width < 900px) {
    .testi-image-holder{
    border-radius: 20px;
    background-size: cover;
  
    width: 100%;
    height: 17vh;
    border: 1px solid red;
}
 
.testimonial{
    padding: 5%;
}
 }
 @media(width < 500px) {
    .testi-image-holder{
      background-size: contain;
      background-repeat: no-repeat;
    }

 }
</style>
