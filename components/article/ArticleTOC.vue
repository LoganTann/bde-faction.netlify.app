<template>
  <ul>
    <li
      v-for="link of articleTOC"
      :key="link.id"
      :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
    >
      <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
// https://content.nuxtjs.org/fr/snippets
export default {
  props: ['articleTOC']
}
</script>
