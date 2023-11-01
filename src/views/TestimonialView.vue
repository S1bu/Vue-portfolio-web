<template >
    <div class="testimonial">
 
            <div class="rowz" v-for="testimonial in testimonials" :key="testimonial.id">
                <!-- <center> -->
                    <div class=" description text-center">
                <br>
                <br>
               <p>"{{ testimonial.Description }}"</p> 
            </div>
            <div class="detail text-center">
                <br>
                <h5 class="card-title">{{ testimonial.fullname }} </h5>
              
                <img :src="testimonial.image" class="card-img-top" :alt="testimonial.fullname" loading="lazy">
           
                <h6>({{ testimonial.Relation }})</h6>
                
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
    background-color: #004d7a;
    width: 100%;
  
}

img{
    width: 150px;
    height: 150px;
    object-fit: contain;
    aspect-ratio: 3/5;
}
 
 
/* ---------------- */ 
.rowz{
    margin:100px;
   transition: 1s;
}
.rowz:hover{
    margin:150px;
    transition: 1s;
 
}
.rowz:nth-child(odd) > 
.detail{
    background-color: rgba(0, 0, 0, 0.69);
    color: white;
    border-radius: 10px;
    float: left;
    width: 35%;
    height: 35vh;
    margin-top: 5%;
    animation:backInLeft; 
    animation-duration: 2s;
    box-shadow: 8px 12px rgba(0, 0, 0, 0.432);
}

.rowz:nth-child(odd)>
.description{
    color: white;
    background-color: rgba(0, 0, 0, 0.69);
    border-radius: 10px;
    float: right;
    width: 60%;
    height: 35vh;
    margin-top: 5%;
    padding: 10px;
    animation:backInRight; 
    animation-duration: 2s;
    box-shadow: 8px 12px rgba(0, 0, 0, 0.432);
}
/* --------------------- */ 
 
.rowz:nth-child(even) > 
.detail{
    background-color: rgba(0, 0, 0, 0.69);
    color: white;
    border-radius: 10px;
    float: right;
    width: 35%;
    height: 35vh;
    margin-top: 5%;
    animation:backInRight; 
    animation-duration: 2s;
    box-shadow: 8px 12px rgba(0, 0, 0, 0.432);
}


.rowz:nth-child(even)>
 .description{
    color: white;
    background-color: rgba(0, 0, 0, 0.69);
    border-radius: 10px;
    float: left;
    width: 60%;
    height: 35vh;
    margin-top: 5%;
    padding: 10px;
    animation:backInLeft; 
    animation-duration: 2s;
    box-shadow: 8px 12px rgba(0, 0, 0, 0.432);
}

.rowz:last-child{
.detail{
    margin-bottom: 20px;
}
.description{
    margin-bottom: 20px;
}
}

@media(width < 700px) {
    .rowz:nth-child(even) >
    .detail{
    font-size: 9px;
        width: auto;
}
.description{

    font-size: 9px;
    width: auto;
}
.rowz:nth-child(odd) >
    .detail{
    float: left;
    font-size: 9px;
        width: auto;
}
.description{
    float: left;
    font-size: 9px;
    width: auto;
}
h5{
    font-size: 10px;
}

}
 

@media(width < 400px) { 
}
</style>
