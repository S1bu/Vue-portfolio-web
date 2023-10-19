<template >
    <div class="testimonial">
        <center>
            <div class="card" v-for="testimonial in testimonials" :key="testimonial.id">
                <div class="row">
                    <center>
                        <br>
                        <h5>{{ testimonial.fullname }} ({{ testimonial.Relation }})</h5>
                        <img :src="testimonial.image" alt="">
                    </center>
                </div>
            <div class="row">
        
            <div class="col-12">
                <center>
                </center>
                <p>{{ testimonial.Description }}</p>     
            </div>
            </div>
          
        
        </div>
        </center>
       
        <!-- <div class="container">
            <div class="card" v-for="testimonial in testimonials" :key="testimonial.id">
                <div class="image">
                    <img :src="testimonial.image" class="card-img-top" :alt="testimonial.fullname" loading="lazy">
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ testimonial.fullname }} ({{ testimonial.Relation }})</h5>
                    <p class="card-text">{{ testimonial.Description }}</p>
                </div>
            </div>
        </div> -->
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
:root {
    ---background-color2 :#004d7a;
    ---alternative-color: gray;
    ---text-color:white;

    --background-color: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
    ---main-color: midnightblue;
    ---second-color:  rgba(0, 0, 0, 0.736);
}
.testimonial {
    background-color: var(---background-color2); 
}

.card:nth-child(1){
    animation:backInRight; 
  animation-duration: 2s;
}
.card:nth-child(2){
    animation:backInLeft; 
  animation-duration: 2s;
}
.card:nth-child(3){
    animation:backInRight; 
  animation-duration: 2s;
}
.card:nth-child(4){
    animation:backInLeft; 
  animation-duration: 2s;
}
.card:nth-child(5){
    animation:backInRight; 
  animation-duration: 2s;
}
.card{
    width: 80%;
    background-color: rgba(0, 0, 0, 0.736);
    color: white;
    margin: 5px;
}

.card img{
    width: 200px;
    height: 200px;
    object-fit: cover;
    /* aspect-ratio: 3/5; */
    /*  */
    border: 2px solid white;
    border-radius: 100%;
}
.card p{
    margin-top:3%;
    margin: 20px;
}
.col-9 h5{
    font-weight: 900;
}
hr{
    width: 70%;
    /* text-align: center; */
}
@media(width < 900px) {
 
}

@media(width < 700px) {
 
}

@media(width < 400px) { 

    

}</style>
