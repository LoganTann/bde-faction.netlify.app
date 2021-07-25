<template>
  <div>
    <input class="browser-default" v-model="query" type="search" autocomplete="off">

    <ul v-if="articles.length">
      <li v-for="article of articles" :key="article.path">

        <article-link :to="article.path">
          {{ article.title }}
        </article-link>
      </li>
    </ul>
  </div>
</template>

<script>
// https://content.nuxtjs.org/fr/snippets
export default {
  name: 'ArticleSearchbar',
  data () {
    return {
      query: '',
      articles: []
    };
  },
  watch: {
    async query (query) {
      if (!query) {
        this.articles = []
        return
      }

      this.articles = await this.$content({deep: true})
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(12)
        .search(query)
        .fetch()

      return 'aaaaa';
    }
  }
}
</script>
