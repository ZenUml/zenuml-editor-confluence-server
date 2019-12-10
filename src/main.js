import Vue from 'vue'
import App from './App.vue'

/*
 * According to ES6, `import` statements are always hoisted to the top of the file. This is a workaround to make sure
 * that Vue is exposed before injecting `sequence-diagram` web component
*/
window.Vue = Vue
require('sequence-diagram')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
