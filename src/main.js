import Vue from 'vue'
import App from './App.vue'
import VueValidate from 'vee-validate'
Vue.use(VueValidate);


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
