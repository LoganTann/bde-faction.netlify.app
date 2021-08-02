<template>
  <div>
    <article-link v-if="prev" :to="prev.path">
      {{ prev.title }} <
    </article-link>
    <article-link v-if="next" :to="next.path">
      > {{ next.title }}
    </article-link>
  </div>
</template>

<script>
// https://content.nuxtjs.org/fr/snippets
export default {
  props: ['prev', 'next']
}
</script>
