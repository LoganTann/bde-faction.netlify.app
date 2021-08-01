<template>
  <div>
    <p>Derniers articles</p>
    <p v-if="lastArticles">
      {{lastArticles}}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IContentDocument } from "@nuxt/content/types/content";

export default Vue.extend({
  async asyncData ({ $content, params, error }) {
    const lastArticles = (await $content({ deep: true })
      .only(['title', 'description', 'path'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()
    ) as Array<IContentDocument>

    return {
      lastArticles
    }
  }
});
</script>

<style scoped>

</style>
