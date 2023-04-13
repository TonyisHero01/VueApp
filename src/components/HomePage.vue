<template>
    <v-container>
        <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Home
        </h1>
        <v-form>
            <label for="input">Input </label>
            <v-text-field type="text" id="input" v-model="message"></v-text-field>
        </v-form>
        <v-btn @click="clearText">clear text</v-btn>
        <br>
        <br>
        <label for="increaseButton"> counter: {{ count }} </label>
        <v-btn id="increaseButton" @click="increase()">increase</v-btn>
      </v-col>
    </v-container>
</template>

<script>
  //import { store } from '../store/store';
  export default {
    data() {
      return {
        message: "",
      }
    },
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
      },
      clearText() {
        this.message = ''
      }
    }
  }
  /*
  function clearText() {
    const input = document.getElementById("input");
    input.value = "";
  }
  */
  
</script>