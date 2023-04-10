<script>
import page1 from './page1.vue'
import page2 from './page2.vue'

const routes = {
  '/': page1,
  '/about': page2
}


export default {
  data() {
    return {
      counter: 0,
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || page2
    },
    total() {
      return this.$store.state.total
    }
    
  },
  methods: {
    increase() {
      this.store.commit('increment')
    }, 
    decrease() {
      this.store.commit('decrement')
    }
  }
}
/*
export default {
  mounted() {
    console.log(this.$store.state.count);
  }
}
*/
</script>

<template>
  <a href="#/page1">page1</a> |
  <a href="#/page2">page2</a> |
  <component :is="currentView" :count="counter" />
</template>