<template >
    <div class="conatiner-fluid">

   
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
            <div class="buttons">
                <button class="carousel_btn back btn-primary"> left </button>
                <button class="carousel_btn next  btn-primary"> right </button>
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
// let next = document.querySelector('.next');
// let back = document.querySelector('.back');
// let carousel = document.querySelector('.container');
// let angle = 0;

// next.addEventListener('click', () => {
//     angle -= 45;
//     carousel.style.transform = `translateZ(-25rem) 
//     rotateY(${angle}deg)`;
// });

// back.addEventListener('click', () => {
//     angle += 45;
//     carousel.style.transform = `translateZ(-25rem) 
//     rotateY(${angle}deg)`;
// });
</script>

<style  scoped>
.buttons{
    margin-top: 90%;
}
.conatiner-fluid{
    background-color: midnightblue;
}
.testimonial{
   height: 60vh;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items:center;
   justify-content: space-between;
   perspective: 100rem;
  
}
.container {
    position: relative;
    width: 20rem;
    height: 20rem;
    transform-style: preserve-3d; 
    transform:  translateZ(-25rem);  
    transition: transform 0.3s ease-in; /*smooth scrolling*/
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
    width: 100%; /*width of the card*/
    height: auto;  /*height of the card*/
    position: absolute;
}

.card:nth-child(1){
    transform: rotateY(0deg) translateZ(25rem);
}
.card:nth-child(2){
    transform: rotateY(45deg) translateZ(25rem);
}
.card:nth-child(3){
    transform: rotateY(90deg) translateZ(25rem);
}
.card:nth-child(4){
    transform: rotateY(135deg) translateZ(25rem);
}
.card:nth-child(5){
    transform: rotateY(180deg) translateZ(25rem);
}
.card:nth-child(6){
    transform: rotateY(225deg) translateZ(25rem);
}
.card:nth-child(7){
    transform: rotateY(270deg) translateZ(25rem);
}
.card:nth-child(8){
    transform: rotateY(315deg) translateZ(25rem);
}
 .card:hover{
    border: 4px solid white;
   /* animation: tada; /* referring directly to the animation's @keyframe declaration */
    /*animation-duration: 5s; /* don't forget to set a duration! */
 }
 @media(width < 600px){
    .container {
        grid-template-columns: auto; 
     }
}
</style>
