/*
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Vuex from 'vuex'

createApp(App).mount('#app')
Vue.use(Vuex)
*/



import Vue from 'vue';
import App from './App.vue';
import { store } from './store/store';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
});
