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

.testimonial{
   background-color: midnightblue;
  
}
.container {
    display: grid;
    grid-template-columns: auto auto auto;
     
}

.container img {
    width: 200px;
    height: 200px; 
    object-fit:contain;
   aspect-ratio: 3/5;
   margin-top: 5px;

}

.card {
    margin: 5px;
    text-align: center;
    backdrop-filter: blur(6px) saturate(165%);
    -webkit-backdrop-filter: blur(6px) saturate(165%);
    background-color: rgba(10, 18, 33, 0.91);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    color: white;
  transition: 1s;
}


 .card:hover{
    border: 4px solid white;
   /* animation: tada; /* referring directly to the animation's @keyframe declaration */
    /*animation-duration: 5s; /* don't forget to set a duration! */
 }
</style>
