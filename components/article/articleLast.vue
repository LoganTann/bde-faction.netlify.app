<template>
  <div class="row">
    <div v-for="article of lastArticles" :key="article.path" class="col s12 m6">
      <div class="card">
        <div class="card-content">
          <iso-to-date :iso="article.createdAt" />
          <span class="card-title">{{ article.title }}</span>
          <p>{{ article.description }}</p>
        </div>
        <div class="card-action">
          <article-link :to="article.path">
            Lire l'article
          </article-link>
        </div>
      </div>
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

<style>
.card-action a {
  color: crimson;
}
</style>
