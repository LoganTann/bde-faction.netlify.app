<template>
  <canvas class="homepage-logo-margin" :width="logo_rect.width" :height="height">
    <!-- Canvas is even better than SVG to create a margin that follows aspect ratio -->
  </canvas>
</template>

<script>
/***
* Generates a
* @see components/homepage-header.vue, /assets/logo.png
*/
export default {
  name: 'homepage-logo-margin',

  data: () => ({
    logo_rect: {width: 563, height: 360},
    flag_position: 0.58
  }),
  computed: {
    height() {
      return this.logo_rect.height * this.flag_position;
    }
  }
}
</script>

<style scoped>
.homepage-logo-margin {
  max-width: 80vw;
  max-height: 50vh;
}
</style>
