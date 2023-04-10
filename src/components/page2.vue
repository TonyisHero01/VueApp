<template>
    <h1>Page 2</h1>
    <label for="decreaseButton"> counter: {{ $store.state.total }} </label>
    <button id="decreaseButton" @click="decrease()">decrease</button>
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
</script>