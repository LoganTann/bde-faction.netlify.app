<template>
  <blockquote v-show="articleTOC.length > 0">
    <h5>Table des contenus : </h5>
    <ul class="browser-default">
      <li
        v-for="link of articleTOC"
        :key="link.id"
        :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
      >
        <NuxtLink :to="`#${link.id}`">
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </blockquote>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    articleTOC: { type: Array, required: true }
  }
});
</script>
