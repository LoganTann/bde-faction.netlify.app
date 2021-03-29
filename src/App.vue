<template>
  <div id="app">
    <Navbar/>

    <transition :name="transitionName">
      <router-view class="child-view"/>
    </transition>
  </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {transitionName: "none"}
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
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

.child-view {
  transition: all 0.75s cubic-bezier(.55,0,.1,1);
  position: relative;
}
.slide-left-enter, .slide-right-leave-active {
  position: absolute;
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
  position: absolute;
}

.slide-left-enter, .slide-right-leave-active,
.slide-left-leave-active, .slide-right-enter {
  align-self: center;
}
</style>
