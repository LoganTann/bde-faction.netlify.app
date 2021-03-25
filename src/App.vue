<template>
  <div id="app">

    <HomepageHeader/>
    <section>
      <div class="empty"></div>
      <lorem add="5p"></lorem>
    </section>

  </div>
</template>

<script>
import HomepageHeader from './components/homepage-header.vue'
import lorem from 'vue-lorem-ipsum';


export default {
  name: 'App',
  components: {
    HomepageHeader,
    lorem
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
}

h2, h3 {
  font-family: 'Space Mono';
}

h3 {
  font-size: 2.3rem;
}
#app>section:last-child {
  flex-grow: 1;
}
#app>section>.empty {
  width: 563px;
  height: 100px;
  max-width: 80vw;
  max-height: 25vh;
}
</style>
