import Vue from 'vue'
import store from './store'

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
