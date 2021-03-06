<template>
<div class="">
    <div class="jumbotron p-3 p-md-5 text-dark font-weight-bold rounded header-alarm">
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic ">Tecnologia de Seguridad</h1>
        <p class="lead my-3  font-weight-bold ">
          Sitemas de alarmas de detecciìon e intrusìon </p>
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
            src="../assets/aintru.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h4 class="card-title">Alarmas de Intrusion</h4>
            <h5>Productos</h5>

            <li>Sensores de Movimiento</li>
            <li>Detector de apertura de puertas y ventanas </li>
            <li>Detector de vidrio trizado</li>
            <li>Barreras Perimetrales</li>
            <li>Detector Sìsmico</li>
            <li>Detector presencia interior y exterior</li>
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
                DETECCIÓN DE INTRUSOS -DETECCIÓN DE HUMO – ALARMAS INCENDIO

              </h3>
              <p class="lead text-center p-5">
                Tenemos a tu disposición un completo sistema  de Alarmas
                 con el cual podrás proteger tu casa o empresa, a la vez
                que puedes revisar y controlar desde donde te encuentres a
                través de tu Telefono Movil. También, podrás visualizar las cámaras
                que están integradas en tiempo real y realizar activaciones en
                caso de que detectes situaciones de riesgo o de activación de la
                alarma; Contamos con una central de monitoreo para que nunca descuides tus bienes.-
              </p>
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
      name: 'Alarmas'        
    }
</script>

<style lang="scss" scoped>

.header-alarm {
  background-image: url("../assets/alarma-header.jpg");
  background-repeat: repeat-y;
  background-size: cover;
  height: 350px;
}

.flyer{

  height: 600px;
  width: 600px;
}

</style>