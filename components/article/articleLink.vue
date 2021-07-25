<template>
  <NuxtLink :to="correctPath(to)">
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  props: ['to'],
  methods: {
    /// adds prefix and removes the suffix /index
    correctPath (path) {
      return `/articles${path}`.replaceAll(/\/index$/g, "/");
    }
  }
};

</script>
