<template>
  <div id="app">

    <HomepageHeader/>
    <section class="container">
      <HomepageLogoMargin/>
      <lorem add="2p"></lorem>
    </section>
    <Team/>
  </div>
</template>

<script>
import HomepageHeader from './components/homepage-header.vue'
import HomepageLogoMargin from './components/homepage-logo-margin.vue'
import Team from './components/team.vue'
import lorem from 'vue-lorem-ipsum';


export default {
  name: 'App',
  components: {
    HomepageHeader,
    HomepageLogoMargin,
    lorem,
    Team
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans';
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
h2, h3 {
  font-family: 'Space Mono';
}

h3 {
  font-size: 2.3rem;
}
</style>
