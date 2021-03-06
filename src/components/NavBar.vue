<template>
 <div>
    <b-navbar class="bg-primary nav" toggleable="md">
     <b-container>

     <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-brand class="logo font-weight-bold" href="#"
        >
  <a class="navbar-brand" href="#"><router-link to="/"><img src="../assets/logos.png" alt="logo-proalpes"></router-link></a>

        </b-navbar-brand>

      <b-collapse is-nav id="nav-collapse" class="burger" >
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        <b-nav-item class="font-weight-bold" >
        
         <a class="nav-link active"  aria-current="page" ><router-link to="About">Quienes Somos</router-link></a>
        </b-nav-item>
          
          <b-nav-item class="font-weight-bold" href="#">Contacto</b-nav-item>

        </b-navbar-nav>
      </b-collapse>
     </b-container>
    </b-navbar>
  </div>




</template>

<script>
export default {
  name: 'NavBar',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.nav {
  
  color: white;
  height: auto;

}



.burger{
  
  color: white;
  position: relative;
  z-index: 1000;
  vertical-align: middle
 
   
}






 .logo a img{

    width: 200px;
    height: 70px;
    margin-left: 200px
 }


 a{
 
 text-decoration: none;
 font-size: 20px
 }
</style>
