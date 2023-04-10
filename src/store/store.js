import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export let store = new Vuex.Store({
  state: {
    total: 0
  },
  getters: {
    getTotal (state) {
      return state.total*2
    }
  },
  mutations: {
    increment (state) {
      state.total += 1
    },
    decrement (state) {
      state.total -= 1
    }
  },
  actions: {
    increase (context, price) {
      context.commit('increment', price)
    }
  }
});
