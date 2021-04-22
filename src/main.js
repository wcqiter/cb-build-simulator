import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import translate from "./translate";

Vue.config.productionTip = false

import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css';

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  store,
  translate,
}).$mount('#app')
