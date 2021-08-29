<template>
  <div class="row">
    <div v-for="article of lastArticles" :key="article.path" class="col s12 m6 l4">
      <article-card :article="article" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  data () {
    return {
      lastArticles: [] as Array<IContentDocument>
    }
  },

  async fetch () {
    this.lastArticles = (await this.$content({ deep: true })
      .only(['title', 'description', 'path', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .where({ path: { $ne: "/index" } })
      .fetch()
    ) as Array<IContentDocument>;
  }
});
</script>

<style scoped>
.card-action a {
  color: crimson;
}
</style>
