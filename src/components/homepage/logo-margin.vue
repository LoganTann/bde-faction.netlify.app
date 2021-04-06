<template>
  <canvas class="homepage-logo-margin" :width="logo_rect.width" :height="logo_rect.height * flag_position">
    <!-- Canvas is even better than SVG to create a margin that follows aspect ratio -->
  </canvas>
</template>

<script>
/***
* Generates a space that depends on
* @see components/homepage/homepage-header.vue, /assets/logo.png
*/
export default {
  name: 'homepage-logo-margin',
  data: () => ({
    logo_rect: {width: 563, height: 360},
    flag_position: 0.58
  })
}
</script>

<style>
.homepage-logo-margin {
  max-width: 80vw;
  max-height: 50vh;
}
</style>
