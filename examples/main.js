import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import ZDesign from '../packages'
Vue.use(ZDesign)

new Vue({
  render: h => h(App),
}).$mount('#app')
