<template>
  <div>
    <NuxtLink v-if="prev" :to="correctPath(prev.path)">
      {{ prev.title }} <
    </NuxtLink>

    <NuxtLink v-if="next" :to="correctPath(next.path)">
      > {{ next.title }}
    </NuxtLink>
  </div>
</template>

<script>
// https://content.nuxtjs.org/fr/snippets
export default {
  props:['prev', 'next'],
  methods: {
    correctPath (path) {
      // adds prefix and removes the suffix /index
      return `/articles${path}`.replaceAll(/\/index$/g, "/");
    }
  }
}
</script>
