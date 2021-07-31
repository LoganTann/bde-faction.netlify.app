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
      if (typeof (path) === 'string')
        return `/articles${path}`.replace(/\/index$/g, "/");
      else return '/articles/'
    }
  }
};

</script>
