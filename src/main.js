import Vue from 'vue'

import App from './App.vue'
// eslint-disable-next-line no-console
console.log('exposing Vue on window:', Vue)
import 'sequence-diagram'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
