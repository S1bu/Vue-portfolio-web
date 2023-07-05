<template>
    <div class="footer">
        <div class="link">
        <h3>Follow me</h3>
            <a href="http://www.linkedin.com/in/sibusiso-dyan-0004" target="_blank"><i class="bi bi-linkedin"></i></a> <!--linked in link-->
            <a href="https://github.com/S1bu" target="_blank"><i class="bi bi-github"></i></a> <!--github-->
      
       <p>Sibusiso Dyan  Copyright &copy; {{ Year }} <!--current year with using javascript--></p>
    </div>
    </div>
</template>

<script>
       
    export default {
        data(){
            return{
                Year: new Date().getUTCFullYear() //getting the current year via javascript
            }
    }
}
</script>

<style scoped>

</style>