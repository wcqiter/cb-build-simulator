import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSocialSharing from 'vue-social-sharing'
import { BootstrapVue } from 'bootstrap-vue'

import App from './App.vue'
import store from "./store";
import translate from "./translate";

import Simulator from '@/views/Simulator.vue'

Vue.config.productionTip = false

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueSocialSharing);

const routes = [
  { path: '*', component: Simulator },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'development' ? '/' : '/cb-build-simulator/',
  routes
})

new Vue({
  render: h => h(App),
  router,
  store,
  translate,
}).$mount('#app')
