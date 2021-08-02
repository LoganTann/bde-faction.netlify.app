<template>
  <NuxtLink :to="correctPath(to)">
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    to: { type: String, required: true, default: '/index' }
  },
  methods: {
    /// adds prefix and removes the suffix /index
    correctPath (path: string) {
      return `/articles${path}`.replace(/\/index$/g, "/");
    }
  }
});

</script>
