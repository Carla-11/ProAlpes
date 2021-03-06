<template>
  <div class="">
    <div class="jumbotron p-3 p-md-5 text-white rounded header-cam">
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">Tecnologia de Seguridad</h1>
        <p class="lead my-3">
          Aumenta la seguridad de tu hogar o negocio con un sistema de circuito
          cerrado de televisión, con visualización de video en vivo en tu Movil
          y respaldo permanente de grabaciones.
        </p>
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
            src="../assets/camanaloga.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h4 class="card-title">Camaras Analogas</h4>
            <h5>Caracteristicas</h5>

            <li>Visualizacion Remota dese Moviles</li>
            <li>Almacenamiento en Disco Duro</li>
            <li>Visualizacion Nocturna</li>
            <li>Notificaciones por correo electronico</li>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="card col-4">
          <img
            class="card-img-top"
            src="../assets/cam.png"
            alt="Card image cap"
          />
          <div class="card-body list-card">
            <h4 class="card-title">Camaras IP</h4>
            <h5>Caracteristicas</h5>

            <li>Visualizacion Remota dese Moviles</li>
            <li>Almacenamiento en Disco Duro</li>
            <li>Visualizacion Nocturna</li>
            <li>Notificaciones por correo electronico</li>

            <p class="card-text my-3">
              <small class="text-muted">Consulte por su proyecto</small>
            </p>
          </div>
        </div>
        <div class="card col-4">
          <img
            class="card-img-top"
            src="../assets/ptz.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h4 class="card-title">Camaras PTZ</h4>
            <h5>Caracteristicas</h5>

            <li>Visualizacion Remota desde Moviles</li>
            <li>Almacenamiento en Disco Duro</li>
            <li>Visualizacion Nocturna</li>
            <li>Notificaciones por correo electronico</li>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>

        <div>
          <md-content>
            <img src="../assets/cam.jpg" alt="primera"
          /></md-content>
          <md-content class="md-primary"
            ><img src="../assets/hik.jpg" alt="primera"
          /></md-content>
         
          <hr class="featurette-divider" />

          <div class="row featurette my-3">
            <div class="col-md-7 my-5">
              <h2 class="text-center featurette-heading">
                Integra CCTV con nuestro sistema de Alarmas.
              </h2>
              <p class="lead text-center p-5">
                Tenemos a tu disposición un completo sistema de Kit de Alarma
                Lightsys con el cual podrás proteger tu casa y empresa, a la vez
                que puedes revisar y controlar desde donde te encuentres a
                través de tu smartphone. También, podrás visualizar las cámaras
                que están integradas en tiempo real y realizar activaciones en
                caso de que detectes situaciones de riesgo o de activación de la
                alarma; estamos en línea con carabineros en caso de que s
                activen los protocolos y tenemos una flota de móviles que
                realizan rondas preventivas, además de otros servicios que están
                pensados en ti, tu familia y empresa.
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
  name: "Camaras",
};
</script>

<style lang="scss" scoped>
.header-cam {
  background-image: url("../assets/cam-header.png");
  background-repeat: repeat-y;
  background-size: cover;
  height: 350px;
}

.images {
  height: 350px;
  width: 450px;
}
.catalogo {
  padding: 20px;
}

.md-content {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}

li {
  text-decoration: none;
}

.flyer{

  height: 600px;
  width: 600px;
}
</style>