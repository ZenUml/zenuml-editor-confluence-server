import Vue from 'vue'
import VueCodeMirror from 'vue-codemirror'
import Vuex from 'vuex'

import { Store } from 'vue-sequence'
import 'vue-sequence/dist/vue-sequence.css'

import Workspace from './components/Workspace'

Vue.use(Vuex)
Vue.use(VueCodeMirror)

Vue.config.productionTip = false
const store = new Vuex.Store(Store);

window.VueModel = new Vue({
  store,
  render: h => h(Workspace),
})

