import { createStore } from 'vuex';

export let store = createStore({
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
    increase (context) {
      context.commit('increment')
    }
  }
});
