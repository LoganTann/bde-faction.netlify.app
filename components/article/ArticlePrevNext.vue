<template>
  <div>
    <NuxtLink v-if="prev" :to="{ name: 'blog-slug', params: { slug: prev.slug } }">
      {{ prev.title }}
    </NuxtLink>

    <NuxtLink v-if="next" :to="{ name: 'blog-slug', params: { slug: next.slug } }">
      {{ next.title }}
    </NuxtLink>
  </div>
</template>

<script>
// https://content.nuxtjs.org/fr/snippets
export default {
  async asyncData({ $content, params }) {
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      prev,
      next
    }
  }
}
</script>
