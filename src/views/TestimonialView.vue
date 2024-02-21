<template >
    <div class="testimonial">
        <br>
 <h1>What my peers have to say about me</h1>
            <!-- <div class="rowz" > -->
                <div class="row" v-for="testimonial in testimonials" :key="testimonial.id"  data-aos="fade-up">
                    <div class="col-4">
                <br>
                <h5 class="card-title">{{ testimonial.fullname }} </h5>
              
                <img :src="testimonial.image" class="card-img-top" :alt="testimonial.fullname" loading="lazy">
           
                <h6>({{ testimonial.Relation }})</h6>
                
            </div>
            
                    <div class="col-7">
                <br>
                <br>
               <p>"{{ testimonial.Description }}"</p> 
            </div>
                </div>
        </div>
      
    <!-- </div> -->
  
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
.rowz{
    
    width: 100%;
    border: 1px solid red;
}
.testimonial{
 
    background-color: #043958;
    /* width: 100%; */
  border: 1px solid red;
}
 
img{
    width: 150px;
    height: 150px;
    object-fit: contain;
    aspect-ratio: 3/5;
}
 
 h1{
    text-align: center;
    text-shadow: 2px 5px rgba(0, 0, 0, 0.432);
  color: white;
  font-weight: 900;
 }

.col-7{
    border: 1px solid red;
    color: white;
    padding: 0 3%;
}
.col-4{
    border: 1px solid red;
    color: white;
}

</style>
