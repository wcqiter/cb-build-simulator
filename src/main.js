import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from "./store";
import translate from "./translate";

import Simulator from '@/views/Simulator.vue'

Vue.config.productionTip = false

import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.use(VueRouter)

const routes = [
  { path: '*', component: Simulator },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router,
  store,
  translate,
}).$mount('#app')
