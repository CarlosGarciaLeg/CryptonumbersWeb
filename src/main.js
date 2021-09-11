import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// header
import header from '@/components/header'
Vue.component("header-app", header);

// footer
import footer from '@/components/footer'
Vue.component("footer-app", footer);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
