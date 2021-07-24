<template>
  <transition name="navAnim">
    <div id="nav" v-if="! isHidden">
      <Nuxt-link to="/"><img src="@/assets/logo.webp" alt="Logo BDE FACTION"></Nuxt-link>
      <Nuxt-link to="/">Accueil</Nuxt-link>
      <Nuxt-link to="/team">La team</Nuxt-link>
      <Nuxt-link to="/blog">Le blog</Nuxt-link>
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

<style>
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
#nav img {
  max-height: 4em;
  width: auto;
}
</style>
