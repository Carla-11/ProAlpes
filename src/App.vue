<template>
  <div id="app">
    <NavBar />
    <BtnWsp/>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from "@/components/Footer.vue";
import BtnWsp from "@/components/BtnWsp.vue";

export default {
  Name: "App",

  

  components: {
    NavBar,
    Footer,
    BtnWsp
  },
};
</script>

<style lang="scss">
</style>
