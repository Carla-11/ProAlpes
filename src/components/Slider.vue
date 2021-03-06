<template>
  <div class="container">
    <div class="row ">
    <div class="slider my-3 cols7 ">
      <ul class="slides">
        <li class="slides">
          <img class="responsive" src="../assets/headerface.jpg" />
          <!-- random image -->
          <div class="caption right-align"></div>
        </li>
        <li>
          <img class="responsive" src="../assets/colorvu.png" />
          <!-- random image -->
          <div class="caption font-weight-bold left-align mt-3">
            <h3 class="sombra white-text">Grabacion Nocturna en Colores</h3>
            <h5 class="sombra white-text text-lighten-3">pincha Aqui</h5>
          </div>
        </li>
        <li>
          <img class="responsive" src="../assets/img/hik2.jpg" />
          <!-- random image -->
          <div class="caption center-align">
            <h3 class="dark-text">La mejor Tecnologia en Seguridad</h3>
            <h5 class="light Dark-text text-lighten-3">En ProAlpes</h5>
          </div>
        </li>
        <li>
          <img class="responsive" src="../assets/videoportero.jpg" />
          <!-- random image -->
          <div class="caption center-align">
            <h3 class="blue-text">Citofonia</h3>
            <h5 class="blue-text">
              Video Portero - Atiende tu Puerta dese tu movil
            </h5>
          </div>
        </li>
        <li>
          <img class="responsive" src="../assets/Captura.png" />
          <!-- random image -->
          <div class="caption center-align">
            <h3>Alta Definicion</h3>
            <h5 class="light grey-text text-lighten-3">
              Mayor tecnologia en Dispositivos
            </h5>
          </div>
        </li>
        <li>
          <img class="responsive" src="../assets/hik.jpg" />
          <!-- random image -->
          <div class="caption center-align">
            <h3 class="blue-text">Productos de Calidad y Garantia</h3>
            <h5 class="light blue-text text-lighten-3">
              Somos Proveedores e Instaladores
            </h5>
          </div>
        </li>
      </ul>
    </div>
    <div class="cols4 my-3 text-center col s12">

     <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Kit Camara de seguridad</div>
          <div class="md-subhead">184.000</div>
        </md-card-header-text>

        <md-card-media md-medium>
          <img src="../assets/kitcam.webp" alt="camaras">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Cotize su proyecto</md-button>
        <md-button>Comprar</md-button>
      </md-card-actions>
    </md-card>

      <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Alarma Comunitaria Solar</div>
          <div class="md-subhead">$ 220.000</div>
        </md-card-header-text>

        <md-card-media md-medium>
          <img src="../assets/asolar.webp" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Cotize su proyecto</md-button>
        <md-button>Comprar</md-button>
      </md-card-actions>
    </md-card>
    
    
    </div>
  </div>
  
  
  </div>
</template>

<script>
import M from "materialize-css";

export default {
  name: "Slider",
};

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".slider");
  M.Slider.init(elems, {
    indicators: true,

    interval: 2000,
  });
});
</script>

<style lang="scss" scoped>
.caption h3 {
  text-shadow: 1px 1px 1px grey;
}

.cols7{

width: 60%
}

.cols4{

width:40%

}

.md-card {
    width: 420px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;

    height: 200px
  }
</style>