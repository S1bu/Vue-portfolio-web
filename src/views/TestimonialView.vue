<template >
    <div class="testimonial">
        <div class="container">
            <div class="card" v-for="testimonial in testimonials" :key="testimonial.id">
                <div class="image">
                    <img :src="testimonial.image" class="card-img-top" alt="">
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ testimonial.fullname }} ({{ testimonial.Relation }})</h5>
                    <p class="card-text">{{ testimonial.Description }}</p>
                </div>
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
:root{
    --background-color:linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
      ---main-color :midnightblue;
      ---second-color : rgba(10, 18, 33, 0.59);
  }
.testimonial{
  /* background-color: midnightblue; */
  background-image: var(--background-color);
  
}

.container img {
    width: 200px;
    height: 200px; 
    object-fit:contain;
   aspect-ratio: 3/5;
   margin-top: 5px;
   
}
.container { /*row*/
     display: flex;
     flex-direction: row;
     flex-wrap: nowrap;
     overflow-x: auto;
     overflow-y: hidden;
     margin-top: 5%;
     border: 5px solid rgba(10, 18, 33, 0.59);
     border-radius: 10px;
}
/*card*/
.card {
    box-shadow: 2px 2px 20px black;
    width: 30rem;
    margin: 20px;
    text-align: center;
    backdrop-filter: blur(6px) saturate(165%);
    -webkit-backdrop-filter: blur(6px) saturate(165%);
    background-color: var(---second-color);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    color: white;
  transition: 1s;
  flex-grow: 0;
  flex-shrink: 0;
}

 
 @media(width < 700px){
    .container {
        grid-template-columns: auto; 
     }
}

@media(width < 400px){
    .container {
        grid-template-columns: auto; 
     }

     .card-title{
        font-size: 15px;
     }

     .card-text{
        font-size: 13px;
     }
     .card {
        width: 18rem;
  
    }
  
}
</style>
