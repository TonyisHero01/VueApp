
<template>
  <h1>Page 1</h1>
  <form>
      <label for="input">Input </label>
      <input type="text" id="input">
      <input type="submit" value="clear text">
  </form>

  <label for="increaseButton"> counter: {{ $store.state.total }} </label>
  <button id="increaseButton" @click="increase()">increase</button>

</template>
  
<script>
  export default {
    methods: {
      increase() {
        this.store.commit('increment', this.price)
      }, 
      decrease() {
        this.store.commit('decrement', this.price)
      }
    }
  }

  function clearText() {
    const input = document.getElementById("input");
    input.value = "";
  }
  
</script>

