<template>

<div class="container">  

 <div class="jumbotron p-3 p-md-5 text-white rounded header-about">
        <div class="col-md-6 px-0">
          <h1 class="display-4 font-italic">Nosotros</h1>
          <p class="lead my-3"> Proveemos e instalamos los mejores productos del mercado</p>
          <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Revisa aca nuestros casos de exito total.....</a></p>
        </div>
      </div>

 <div class=" txt-nosotros my-2 container">
  <p class="text-center ">Somos un equipo profesional especialista  en seguridad privada  y seguridad  tecnológica con años de experiencia en el área. Asesoramos y buscamos las mejores opciones para satisfacer sus necesidades.
Todos nuestros proyectos se construyen a medida.
Somos un equipo comprometido con la mejora continua de nuestros sistemas de gestión para garantizar la entrega del mejor servicio, productos y asesorías al nivel que usted merece recibir. </p>
 </div>


<div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 mt-5 pt-">
      <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden ">
        <div class="my-3 p-3">
          <h2 class="display-5">Vision</h2>
          <p class="lead">Consolidar a ProAlpes a nivel Nacional en el servicio de Seguridad Privada, reconocido por ofrecer soluciones integrales y de calidad a nuestros clientes.</p>
        </div>
        <div class="bg-primary shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"> <font-awesome-icon  class="text-light icono my-5" :icon="['fas', 'eye'] " size="9x" /> </div>
      </div>
      <div class="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
        <div class="my-3 py-3">
          <h2 class="display-5">Mision</h2>
          <p class="lead">Brindar un servicio de seguridad integral de alta calidad a los requerimientos de nuestros clientes con recurso humano capacitado e innovación tecnológica.</p>
        </div>
        <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">  <font-awesome-icon class="text-primary icono my-5" :icon="['fas', 'bullseye'] " size="9x" /></div>
      </div>
    </div>


 </div>
    
</template>
<script>
export default {
  name: "About",
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;700&display=swap");

div {
  font-family: "Comfortaa", cursive;
  font-kerning: unset;
}

.header-about {
  background-image: url("../assets/about.png");
  background-repeat: repeat-y;
  background-size: cover;

}

.flex-equal > * {
  -ms-flex: 1;
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    -ms-flex: 1;
    flex: 1;
  }
}


.overflow-hidden { overflow: hidden; }

.txt-nosotros{

 font-size: 20px


}

.icono{


  text-align: center
}


</style>
