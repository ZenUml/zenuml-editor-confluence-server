import Vue from 'vue'
import VueCodeMirror from 'vue-codemirror'
import Vuex from 'vuex'

import { Store } from 'vue-sequence'
import 'vue-sequence/dist/vue-sequence.css'

import App from './App.vue'

Vue.use(Vuex)
Vue.use(VueCodeMirror)

Vue.config.productionTip = false
const store = new Vuex.Store(Store);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
