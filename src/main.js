import Vue from 'vue'
import App from './App.vue'
import router from './router'


new Vue({
  router,
  App,
  render(h){return h(App)}
}).$mount('#app')
