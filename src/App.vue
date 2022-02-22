<template>
  <the-nav></the-nav>
  <main>
    <base-container>
      <h3>Time to generate a gif, my dudes</h3>
      <router-view></router-view>
    </base-container>
  </main> 
</template>

<script>
import TheNav from './components/nav/TheNav.vue';
import BaseContainer from './components/BaseContainer.vue';

export default {
  name: 'App',
  components: {
    TheNav,
    BaseContainer,
  },
  mounted() {
    this.$store.dispatch('setCurrentGif', 'ferret');
  }
}
</script>

<style>
iframe {
    border: none;
    max-width: 100%;
}

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
