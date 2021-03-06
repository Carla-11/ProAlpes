<template>
  <div class="home">
  <Slider/>
    <Servicios/>

    <hr class="featurette-divider">

    <div class="row featurette my-3">
      <div class="col-md-7">
        <h2 class=" text-center featurette-heading">Lorem ipsum dolor<span class="text-muted">lorem ipsum</span></h2>
        <p class="lead text-center p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere ullam exercitationem eum dolores dicta aliquid nihil, voluptatibus laudantium mollitia consectetur explicabo pariatur suscipit similique magnam aperiam sequi nesciunt, eius culpa. At assumenda velit dolores voluptatum minima eaque. Eligendi accusantium atque cumque unde quos dolorem necessitatibus, itaque architecto sapiente impedit! Deleniti optio corrupti officiis architecto, quasi sit dolorum vero veniam fuga dolorem, temporibus molestias atque, vitae error aliquam! Error earum obcaecati dignissimos officiis quo perferendis. Eius fugit numquam impedit distinctio?</p>
      </div>
      <div class="col-md-5">
        <img  class="flyer" src="../assets/flyerg.jpg">

      </div>
    </div>
    

  </div>
</template>

<script>
import Servicios from '../components/Servicios.vue';
import Slider from '../components/Slider.vue';

export default {
  name: 'Home',
  components: {
    Servicios, 
    Slider
  }
}
</script>

<style scoped>

.flyer{

  height: 600px;
  width: 600px;
}

</style>
