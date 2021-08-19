<template>
  <i class="material-icons" :class="{'medium': medium, 'circle': circle}"><slot /></i>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    medium: { type: Boolean, default: false, required: false },
    circle: { type: Boolean, default: false, required: false }
  }
});
</script>

<style>

</style>
