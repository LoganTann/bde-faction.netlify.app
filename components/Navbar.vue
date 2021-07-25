<template>
  <transition name="navAnim">
    <div v-if="! isHidden" id="nav">
      <Nuxt-link to="/">
        <img src="@/assets/logo.webp" alt="Logo BDE FACTION">
      </Nuxt-link>
      <Nuxt-link v-for="link in links" :key="link.name" :to="link.url" :class="{'b': isCurrent(link.url)}">
        {{link.name}}
      </Nuxt-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: [
        {name: 'Accueil', url: '/'},
        {name: 'La team', url: '/team'},
        {name: 'Le blog', url: '/articles/'},
      ]
    }
  },
  methods: {
    isCurrent (url) {
      // the root don't have the navbar
      return this.$route.fullPath.startsWith(url) && url !== '/';
    }
  },
  computed: {
    isHidden () {
      return (this.$route.meta.layout || '') === 'hideSidebar'
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
.b {
  font-weight: bold;
}
</style>
