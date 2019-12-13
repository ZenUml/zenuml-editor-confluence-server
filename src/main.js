import Vue from 'vue'
import VueCodeMirror from 'vue-codemirror'
import Vuex from 'vuex'

import { Store } from 'vue-sequence'
import 'vue-sequence/dist/vue-sequence.css'

import App from './App.vue'

Vue.use(Vuex)
Vue.use(VueCodeMirror)

/*
 * According to ES6, `import` statements are always hoisted to the top of the file. This is a workaround to make sure
 * that Vue is exposed before injecting `sequence-diagram` web component
*/
window.Vue = Vue
require('sequence-diagram')
Vue.config.productionTip = false
const store = new Vuex.Store(Store);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
