<template>
  <the-nav></the-nav>
  <main>
    <base-container>
      <h3>Time to generate a gif, my dudes</h3>
      <router-view></router-view>
      <home></home>
    </base-container>
  </main>
  
</template>

<script>
import TheNav from './components/nav/TheNav.vue';
import Home from './components/Home.vue';
import BaseContainer from './components/BaseContainer.vue';

export default {
  name: 'App',
  components: {
    TheNav,
    BaseContainer,
    Home
  },
  mounted() {
    this.$store.dispatch('setCurrentGif', 'ferret');
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  cursor: pointer;
}
</style>
