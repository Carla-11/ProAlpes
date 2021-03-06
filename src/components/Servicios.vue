<template>
  <div class="container marketing my-5">
    <!-- Three columns of text below the carousel -->
    <div class="row">
      <div class="col-lg-4">
        <img
          class="bd-placeholder-img rounded-circle servicios"
          src="../assets/img/camarasv.jpg"
          alt="camaras"
        />

        <h2>Camaras de Vigilancia</h2>
      
        <p><a class="btn btn-primary" ><router-link :to="{ name: 'Camaras'}">Ver Detalles &raquo;</router-link></a></p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img
          class="bd-placeholder-img rounded-circle servicios"
          src="../assets/img/cerco.jpg"
          alt="cercos electricos"
        />
        <h2>Cerco Electrico</h2>
        <p><a class="btn btn-primary" href="#"><router-link :to="{ name: 'CercosElectricos'}">Ver Detalles &raquo;</router-link></a></p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img
          class="bd-placeholder-img rounded-circle servicios"
          src="../assets/img/alarmas.jpg"
          alt="alarmas"
        />
        <h2>Alarmas</h2>
        
        <p><a class="btn btn-primary"><router-link :to="{ name: 'Alarmas'}">Ver Detalles &raquo;</router-link> </a></p>
      </div>
      <!-- /.col-lg-4 -->
    </div>
    <!-- /.row -->

    <!-- -->
    <div class="row">
      <div class="col-lg-4">
        <img
          class="bd-placeholder-img rounded-circle servicios"
          src="../assets/img/guardiarh.jpg"
          alt="camaras"
        />

        <h2>RRHH Seguridad</h2>
       
        <p><a class="btn btn-primary" href="#"> 

<router-link :to="{ name: 'Seguridad'}">Ver Detalles &raquo;</router-link>
</a></p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img
          class="bd-placeholder-img rounded-circle servicios"
          src="../assets/automatizacion.jpg"
          alt="cercos electricos"
        />
        <h2>Automatizacion</h2>
      
        <p><a class="btn btn-primary" href="#"><router-link :to="{ name: 'Automatizacion'}">Ver Detalles &raquo;</router-link></a></p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img
          class="bd-placeholder-img rounded-circle servicios"
          src="../assets/citofonia.jpg"
          alt="alarmas"
        />
        <h2>Citofonia</h2>
     
        <p><a class="btn btn-primary" href="#">Ver Detalles &raquo;</a></p>
      </div>
      <!-- /.col-lg-4 -->
    </div>
    <!-- /.row -->

    <!-- -->
    <div class="row">
      <div class="col-lg-4">
        <img
          class="bd-placeholder-img rounded-circle servicios"
          src="../assets/rj4.jpg"
          alt="camaras"
        />

        <h2>Cableado Estructurado</h2>
    
        <p><a class="btn btn-primary" href="#"><router-link to="Camaras">Ver Detalles &raquo;</router-link></a></p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img
          class="bd-placeholder-img rounded-circle servicios"
          src="../assets/gps.jpg"
          alt="cercos electricos"
        />
        <h2>Sistema Satelital GPS</h2>
       
        <p><a class="btn btn-primary" href="#">Ver Detalles &raquo;</a></p>
      </div>
      <!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <img
          class="bd-placeholder-img rounded-circle servicios"
          src="../assets/img/alarmas.jpg"
          alt="alarmas"
        />
        <h2>Servicio</h2>
        
        <p><a class="btn btn-primary" href="#">Ver Detalles &raquo;</a></p>
      </div>
      <!-- /.col-lg-4 -->
    </div>
    <!-- /.row -->

    <!-- START THE FEATURETTES -->
  </div>
  <!-- /.container -->
</template>

<script>
export default {
  name: "Servicios",
};
</script>

<style lang="scss" scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

p {
  padding: 20px;
}

.v {
  max-width: auto;
}

.servicios {
  max-width: 300px;
  max-height: 200px;
 
}

.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}

.marketing a {

 text-decoration: none;
 color: white;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}
/* rtl:end:ignore */

</style>