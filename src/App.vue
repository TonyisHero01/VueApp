<template>
  <v-app>
    <v-main>
      <router-link to="/">Home</router-link> | 
      <router-link to="/AboutPage">About</router-link>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
//import HomePage from './components/HomePage.vue';

export default {
  name: 'App',

  components: {
    
},

  data: () => ({
    //
  }),
}
</script>
