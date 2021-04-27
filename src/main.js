import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSocialSharing from 'vue-social-sharing'
import { BootstrapVue } from 'bootstrap-vue'

import App from './App.vue'
import store from "./store";

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

// vuex-i18n
import vuexI18n from 'vuex-i18n'
import translateEn from './lang/en.json'
import translateZn from './lang/zh.json'
import translateJp from './lang/jp.json'
Vue.use(vuexI18n.plugin, store);
Vue.i18n.add('en', translateEn);
Vue.i18n.add('zh', translateZn);
Vue.i18n.add('jp', translateJp);
Vue.i18n.set('zh'); // Set default locale

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
}).$mount('#app')
