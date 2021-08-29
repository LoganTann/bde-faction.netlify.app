<template>
  <transition name="navAnim">
    <div v-if="! isHidden" id="nav" class="z-depth-1">
      <nav class="container">
        <a href="#" class="sidenavBtn" @click="toggleMobileNav()">
          <icon>menu</icon>
        </a>
        <Nuxt-link to="/" class="logo-bde" tile="Accueil du site du BDE Faction">
          <img src="@/assets/logo.webp" alt="Logo BDE FACTION">
        </Nuxt-link>
        <ul class="hide-on-med-and-down">
          <li v-for="link in links" :key="link.name">
            <a v-if="link.isExternal" class="isExternal" :href="link.url" :title="link.name + ' (lien externe)' ">{{ link.name }}</a>
            <Nuxt-link v-else :to="link.url" :class="{'active': isCurrent(link.url)}" :title="link.name">
              {{ link.name }}
            </Nuxt-link>
          </li>
        </ul>
        <slot />
      </nav>

      <ul id="mobile-nav" class="sidenav">
        <li v-for="link in links" :key="link.name">
          <a v-if="link.isExternal" :href="link.url">{{ link.name }}</a>
          <Nuxt-link v-else :to="link.url" :class="{'active': isCurrent(link.url)}">
            {{ link.name }}
          </Nuxt-link>
        </li>

        <li><slot /></li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    container: { type: Boolean }
  },
  data () {
    return {
      links: [
        { name: 'Accueil', url: '/' },
        { name: 'La team', url: '/team' },
        { name: 'CPU-Paris', url: '/cpu-paris' },
        { name: 'Descalendrier', url: 'https://edt.bde-faction.fr', isExternal: true },
        { name: 'Le blog', url: '/articles/blog/' },
        { name: 'À propos', url: '/articles/about/' }
      ],
      sidenavInstance: null
    }
  },
  computed: {
    isHidden () {
      return (this.$route.meta.layout || '') === 'hideSidebar'
    }
  },
  watch: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    $route (to, from) {
      if (!this.sidenavInstance) { return; }
      if (this.sidenavInstance.isOpen) {
        this.sidenavInstance.close();
      }
    }
  },
  mounted () {
    const M = this.$M;
    M.AutoInit();
    const mobileSidenav = document.querySelectorAll('.sidenav');
    this.sidenavInstance = M.Sidenav.init(mobileSidenav, {})[0];
  },
  methods: {
    isCurrent (url) {
      if (url === '/') { // should be strict for the home link
        return this.$route.fullPath === url;
      } else {
        return this.$route.fullPath.startsWith(url);
      }
    },
    toggleMobileNav () {
      if (!this.sidenavInstance) { return; }
      if (this.sidenavInstance.isOpen) {
        this.sidenavInstance.close();
      } else {
        this.sidenavInstance.open();
      }
    }
  }
}
</script>

<style lang="scss">
#nav {
  position: sticky;
  z-index: 10;
  top: 0px;
  background-color: white;
}
nav {
  display: flex;
  align-items: center;
  // old vue transition
  transform: translateY(0);
  transition: all 0.75s;

  // materialize.CSS override
  background-color: initial;
  box-shadow: none;
  height: 64px;
  line-height: 64px;
  position: relative;
  z-index: 2; /// @see #mobile-nav

  & a {
    color: black;
    &.isExternal{
      transition: padding-right 0.5s;
      &:hover {
        padding-right: 1.8em;
        &::after {
          opacity: 1;
        }
      }
      &::after {
        transition: opacity 0.5s;
        opacity: 0;
        content: "launch";
        font-family: 'Material Icons';
        font-size: 0.7em;
        color: grey;
        position: absolute;
        display: inline-block;
        transform: translateY(0.2em);
        padding-left: 0.2em;
      }
    }
  }
  & .logo-bde {
    align-self: start;
    & img {
      display: block;
      height: 82px;
      width: auto;
    }
  }
}

// Red underline (transition might not work in vue) //
nav ul a {
  position:relative;
  color: black;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 7px;
    bottom: 0;
    left: 0;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75) 0s;
    transition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75) 0s;
    background-color: #9d1030;
  }
  &.active::before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

// fix materialize navbar for vue
#mobile-nav {
  top: 64px;
  box-shadow: none;
  z-index: 1;
  & a.active {
    font-weight: bold;
    color: #B71C1C
  }
}
.sidenav-overlay {
  z-index: 9;
}

#nav .sidenavBtn {
  display: none;
}
@media screen and (max-width: 992px){
  #nav .logo-bde {
    margin: 0 auto;
  }
  #nav .sidenavBtn {
    position: absolute;
    display: block;
  }
}
</style>
