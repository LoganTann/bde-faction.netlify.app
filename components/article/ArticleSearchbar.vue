<template>
  <div class="article-searchbar search-wrapper input-field" :class="{'hide-on-small-only': hideInMobile}">
    <input
      v-model="query"
      class="autocomplete"
      type="search"
      autocomplete="off"
      placeholder="Rechercher des articles"
      @focusin="focused = 'focused'"
      @focusout="focused = ''"
    >
    <ul class="dropdown-content" :class="focused">
      <li v-for="article of articles" :key="article.path">
        <article-link :to="article.path">
          {{ article.title }}
        </article-link>
      </li>
      <li v-if="articles.length == 0">
        <a v-if="query == ''" href="#!">Cherchez des articles</a>
        <a v-else href="#!">Rien trouvé :-(</a>
      </li>
    </ul>
  </div>
</template>

<script>
// https://content.nuxtjs.org/fr/snippets
export default {
  name: 'ArticleSearchbar',
  props: {
    hideInMobile: Boolean
  },
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

      this.articles = await this.$content({ deep: true })
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(7)
        .search(query)
        .fetch()
    }
  }
}
</script>

<style scoped lang="scss">
.search-wrapper {
  position: relative;
  width: 20em;
  max-width: 100%;
  margin: auto;
}
.dropdown-content {
  transition: all 0.2s;
  display: block;
  top: initial;
  width: 100%;
  transform: rotateX(90deg) translateX(-1em);

  &.focused {
    opacity: 1;
    transform: rotateX(0) translateX(0em);
  }
  & a[href="#!"] {
    color: black;
    cursor: default;
  }
}
</style>
