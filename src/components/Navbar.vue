<template>
  <transition name="navAnim">
    <div id="nav" v-if="! isHidden">
      <router-link to="/"><img src="@/assets/logo.png" alt="Logo BDE FACTION"></router-link>
      <router-link to="/">Accueil</router-link>
      <router-link to="/team">La team</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'navbar',
  computed: {
    isHidden() {
      return (this.$route.meta.layout || "") == "hideSidebar";
    }
  }
}
</script>

<style scoped>
#nav.navAnim-enter {
  transform: translateY(-100%);
}
#nav.navAnim-leave-active {
  position: absolute;
  width: 100%;
  transform: translateY(-100%);
}
#nav {
  position: sticky;
  z-index: 10;
  top: 0px;
  display: flex;
  align-items: center;
  transform: translateY(0);
  transition: all 0.75s;
  height: 4.5em;
  background-color: white;
}
#nav> a {
  margin-left: 1em;
}
img {
  max-height: 4em;
  width: auto;
}
</style>
