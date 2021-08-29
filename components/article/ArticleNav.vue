<template>
  <div class="article-nav collection with-header">
    <div class="collection-header">
      Navigation
    </div>
    <article-link
      v-for="post of getCategory()"
      :key="post.content.path"
      class="collection-item"
      :to="post.content.path"
      :class="'is'+post.type"
    >
      <i class="material-icons secondary-content">{{ entryToIcon(post.type) }}</i>
      {{ post.content.title }}
    </article-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

type entryType = 'article' | 'category' | 'home' | 'parent';
interface articleMetadata {
  'title': string, 'description': string,
  'slug': string, 'path': string, 'dir': string,
  'createdAt': string, 'updatedAt': string
}
interface articleTree {
  [key: string]: {
    sortBy: 'slug' | 'updatedAt',
    content: {
      type: entryType
      content: articleMetadata
    }[]
  }
}
export default Vue.extend({
  name: 'ArticleNav',
  props: {
    allArticles: { type: Array, required: true },
    currentDir: { type: String, required: true }
  },
  data () {
    return {
      categoryContent: {}
    }
  },
  methods: {
    entryToIcon (entryName: entryType) {
      switch (entryName) {
        case "category":
          return 'folder';
        case "home":
          return 'home';
        case "parent":
          return 'arrow_back';
        default:
          return 'subject';
      }
    },
    /**
     * Given a list of articles, will return an object where key is the category and object->content contains the list
     * of articles, correctly sorted (by date or by slug).
     * @param allArticles
     */
    generateBetterStructure (allArticles: any) { // le type 'articleMetadata[]' est pas très cordial avec moi...
      const result: articleTree = {};
      // Will convert the path list into a tree
      for (const article of allArticles) {
        if (typeof result[article.dir] !== "object") {
          result[article.dir] = { content: [], sortBy: "slug" };
        }
        const refDir = result[article.dir];

        switch (article.slug) {
          case 'index':
            if (article.dir !== '/') {
              refDir.sortBy = "updatedAt";
            }
          // fall through
          case '0': {
            const parentDir = '/' + article.dir.split('/').slice(1, -1).join('/');
            refDir.content.push({ type: "home", content: article });
            if (article.dir !== '/' && result[parentDir]) {
              for (const content of result[parentDir].content) {
                if (content.type === 'home') {
                  refDir.content.push({ type: "parent", content: content.content });
                  break;
                }
              }

              result[parentDir].content.push({ type: "category", content: article });
            }
            break;
          }
          default:
            refDir.content.push({ type: "article", content: article });
            break;
        }
      }
      const categoryOrder = ["home", "category", "article", "parent"];
      // will sort
      for (const path in result) {
        const category = result[path];
        if (category.sortBy === 'updatedAt') {
          category.content.sort((a, b) => {
            if (b.type !== a.type) {
              return categoryOrder.indexOf(a.type) - categoryOrder.indexOf(b.type);
            }
            return b.content.updatedAt.localeCompare(a.content.updatedAt);
          });
        }
      }
      return result;
    },
    getCategory () {
      const categoryTree: articleTree = this.generateBetterStructure(this.allArticles);
      return categoryTree[this.currentDir].content;
    }
  }
});
</script>

<style lang="scss">
.article-nav {
  width: 20em;
  max-width: 100%;
  margin: auto;

  &  a.collection-item.nuxt-link-exact-active{
    background-color: #26a69a;
    color: #eafaf9;
    & .secondary-content {
      color: #eafaf9;
    }
  }
}
</style>
