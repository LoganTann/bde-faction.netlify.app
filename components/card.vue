<template>
  <div class="card">
    <div class="card-content">
      <iso-to-date v-if="date" :iso="date" />
      <span class="card-title">{{ title }}</span>
      <slot />
    </div>
    <div class="card-action">
      <nuxt-link v-if="linkType == 'nuxt'" :to="linkURL">
        {{ linkName || 'Accéder' }}
      </nuxt-link>
      <article-link v-else-if="linkType == 'article'" :to="linkURL">
        {{ linkName || 'Accéder' }}
      </article-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["title", "date", "linkType", "linkName", "linkURL"]
}
</script>

<style scoped>

</style>
