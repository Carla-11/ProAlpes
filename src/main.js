import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';


//firebase
import firebase from 'firebase';
import { firebaseConfig } from "./Config/firebaseConfig.js";

// materializeCss
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';



import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'



Vue.use(VueMaterial)

// importacion bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//iconos Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {faUserShield,faBell,faBullseye, faEye} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';



library.add(faUserShield,faBell,faBullseye, faEye )

Vue.component('font-awesome-icon', FontAwesomeIcon)
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
