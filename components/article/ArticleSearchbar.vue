<template>
  <div class="search-wrapper">
    <input class="autocomplete" v-model="query" type="search" autocomplete="off"
           @focusin="focused = 'focused'"
           @focusout="focused = ''"
           placeholder="Rechercher des articles">

    <ul class="dropdown-content" :class="focused">
      <li v-for="article of articles" :key="article.path">
        <article-link :to="article.path">
          {{ article.title }}
        </article-link>
      </li>
      <li v-if="articles.length == 0">
        <a href="#!" v-if="query == ''">Cherchez des articles</a>
        <a href="#!" v-else>Rien trouvé :-(</a>
      </li>
    </ul>
  </div>
</template>
<style>
.search-wrapper {
  position: relative;
  width: 20em;
  margin-left: auto;
}
.dropdown-content {
  transition: all 0.2s;
  display: block;
  top: initial;
  width: 100%;
  transform: rotateX(90deg) translateX(-1em);
}
.dropdown-content.focused {
  opacity: 1;
  transform: rotateX(0) translateX(0em);
}
.dropdown-content a[href="#!"] {
  color: black;
  cursor: default;
}

</style>
<script>
// https://content.nuxtjs.org/fr/snippets
export default {
  name: 'ArticleSearchbar',
  data () {
    return {
      query: '',
      articles: [],
      focused: false
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
        .limit(7)
        .search(query)
        .fetch()

      return 'aaaaa';
    }
  }
}
</script>
