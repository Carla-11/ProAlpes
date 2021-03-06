<template>
    <div class="">
    <div class="jumbotron p-3 p-md-5 text-white font-weight-bold rounded header-cerco">
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic ">Tecnologia de Seguridad</h1>
        <p class="lead my-3  font-weight-bold ">
          Cierre Perimetrales - A segura tu propiedad  </p>
        <p class="lead mb-0">
          <a href="#" class="text-white font-weight-bold"
            >Revisa aca nuestros casos de exito total.....</a
          >
        </p>
      </div>
    </div>

    <div class="container my-5">

    <h2>Te damos asesoria personalizada para tus necesidades.... Solo contactanos</h2>
      <div class="card-deck row my-5">
        <div class="card-deck"></div>
        <div class="card col-4">
          <img
            class="card-img-top"
            src="../assets/cerco1.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h4 class="card-title">Cercos Perimetrales</h4>
            <h5>Caracteristicas</h5>

            <li>Instalacion cercos electricos</li>
            <li>24 horas activo, 24 horas protegido.</li>
            <li>Certificación SEC</li>
            <li>Hogar – Industrial – Agricola</li>
            <p class="card-text">
              <small class="text-muted">Consulte por su proyecto</small>
            </p>
          </div>
        </div>
        <div class="card col-4">
          <img
            class="card-img-top"
            src="../assets/dalarma.jpg"
            alt="Card image cap"
          />
          <div class="card-body list-card">
            <h4 class="card-title">Alarmas de Deteccion</h4>
            <h5>Caracteristicas</h5>

            <li>Central Deteccìon de incendios</li>
            <li>Detector de incendios </li>
            <li>Pulsador manueal de alarma</li>
            <li>Sirena</li>

            <p class="card-text my-3">
              <small class="text-muted">Consulte por su proyecto</small>
            </p>
          </div>
        </div>
        <div class="card col-4">
          <img
            class="card-img-top"
            src="../assets/acomunitaria.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h4 class="card-title">Alarmas Comunitarias</h4>
            <h5>Caracteristicas</h5>

            <li>Alerta inmediata</li>
            <li>Hasta x controles por Alarma</li>
            <li>Vecinos Resguardados</li>
            <p class="card-text">
              <small class="text-muted">Consulte por su proyecto</small>
            </p>
          </div>
        </div>

        <div>
         
          <hr class="featurette-divider" />

          <div class="row featurette my-3">
            <div class="col-md-7 my-5">
              <h3 class="text-center featurette-heading">
                 CERCO ELECTRICO - MAYOR SEGURIDAD 

              </h3>
              <p class="lead text-center p-5">
                Lo cercos eléctricos son la mejor forma de evitar que un intruso ingrese al perímetro de la compañía. La instalación de un cerco perimetral hace que los intrusos no puedan saltarlo ni cortarlo.

De todos los sistemas de detección de intrusos existentes, el cerco perimetral electrónico es el único que no permite el ingreso a la planta. En el caso de las alarmas perimetrales, los infrarrojos, sensores de movimiento y demás, se activan una vez que el intruso está dentro del cerco de la empresa.
              </p>
             <h5>¿ES LEGAL EL CERCO ELECTRICO EN CHILE?</h5>

             <p>Los Cercos Eléctricos ProAlpes con Energía controlada están autorizados. Nuestros Cercos estan fabricados bajo la norma internacional IEC 60335-2-76, la cual esta autorizado por la Superintendencia de Electricidad y Combustibles SEC para ser comercializados en nuestro país. </p>    
             
             <h5>¿EXISTE RIESGO DE MUERTE TRAS UNA DESCARGA EN EL CERCO ELECTRICO?</h5>

             <p> Los Cercos Eléctricos ProAlpes No son letales, es una combinación de alto voltaje modulado en pulsos (corriente alterna), de bajo amperaje, hace que la descarga eléctrica que reciba sea inmediata, fuerte y desagradable, lo que lo obliga a soltar el cerco en forma automática. </p>
              </div>
            <div class="col-md-5">
              <img class="flyer" src="../assets/flyerg.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'CercosElectricos'
        
    }
</script>

<style lang="scss" scoped>

.header-cerco {
  background-image: url("../assets/cerco-header.jpg");
  background-repeat: repeat-y;
  background-size: cover;
  height: 350px;
}

.flyer{

  height: 600px;
  width: 600px;
}
</style>