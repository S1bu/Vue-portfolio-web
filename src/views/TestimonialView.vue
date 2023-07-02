<template>
    <div class="container">
        <div class="card" v-for="testimonial in Testimonials" style="width: 18rem;" :key="testimonial.id">
            <img :src="testimonial.image" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">{{ testimonial.fullname}} {{ testimonial.Relation }}</h5>
              <p class="card-text">{{ testimonial.Description }}</p>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
     computed:{
         Testimonials(){
            return this.$store.state.Testimonials
         }
     },
     mounted(){
        this.$store.dispatch(' fetchTestimonials')
     }
    }
</script>

<style  scoped>
 
</style>