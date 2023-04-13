<template>
    <v-container>
        <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          About
        </h1>
        <label for="increaseButton"> counter: {{ count }} </label>
        <v-btn id="increaseButton" @click="decrease()">decrease</v-btn>
      </v-col>
    </v-container>
</template>

<script>
    //import { store } from '../store/store';
    export default {
        computed: {
            count() {
                return this.$store.state.total
            }
        },
        methods: {
            increase() {
                this.$store.commit('increment')
            }, 
            decrease() {
                this.$store.commit('decrement')
            }
        }
    }
</script>