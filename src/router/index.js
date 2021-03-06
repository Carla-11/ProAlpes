import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/About.vue')
  },
  {
    path: '/seguridad',
    name: 'Seguridad',
    component: () => import( '../views/Seguridad.vue')
  },
  {
    path: '/camaras',
    name: 'Camaras',
    component: () => import( '../views/Camaras.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import( '../views/Contacto.vue')
  },
  {
    path: '/colorvu',
    name: 'Colorvu',
    component: () => import( '../views/Colorvu.vue')
  },
  {
    path: '/cercoselectricos',
    name: 'CercosElectricos',
    component: () => import( '../views/CercosElectricos.vue')
  },

  {
    path: '/alarmas',
    name: 'Alarmas',
    component: () => import( '../views/Alarmas.vue')
  },

  {
    path: '/automatizacion',
    name: 'Automatizacion',
    component: () => import( '../views/Automatizacion.vue')
  },
  {
    path: '/citofonia',
    name: 'Citofonia',
    component: () => import( '../views/Citofonia.vue')
  },
  {
    path: '/cableadoEstructurado',
    name: 'CableadoEstructurado',
    component: () => import( '../views/CableadoEstructurado.vue')
  },
  {
    path: '/serviciosgps',
    name: 'ServiciosGps',
    component: () => import( '../views/ServiciosGps.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
