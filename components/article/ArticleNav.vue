<template>
  <div>
  <h4>Articles dans la catégorie actuelle</h4>
    <!--todo : better implementation-->
  <ul class="browser-default" >
    <li v-for="post of getCategory()">
      <article-link  :to="post.content.path">
        {{post.content.title}}
      </article-link>
    </li>
  </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

interface articleMetadata {
  'title': string, 'description': string,
  'slug': string, 'path': string, 'dir': string,
  'createdAt': string, 'updatedAt': string
}
interface articleTree {
  [key: string]: {
    sortBy: 'slug' | 'updatedAt',
    content: {
      type: 'article' | 'category'
      content: articleMetadata
    }[]
  }
}
export default Vue.extend({
  name: 'ArticleNav',
  props: ['allArticles', 'currentDir'],
  data() {
    return {
      categoryContent: {}
    }
  },
  methods: {
    /**
     * Given a list of articles, will return an object where key is the category and object->content contains the list
     * of articles, correctly sorted (by date or by slug).
     * @param allArticles
     */
    generateBetterStructure (allArticles: articleMetadata[]) {
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
            if (article.dir !== '/' && result[parentDir]) {
              result[parentDir].content.push({ type: "category", content: article });
            }
            break;
          }
          default:
            refDir.content.push({ type: "article", content: article });
            break;
        }
      }
      // will sort
      for (const path in result) {
        const category = result[path];
        if (category.sortBy === 'updatedAt') {
          category.content.sort((a, b) => b.content.updatedAt.localeCompare(a.content.updatedAt));
        }
      }
      return result;
    },
    getCategory() {
      const categoryTree: articleTree = this.generateBetterStructure(this.allArticles);
      return categoryTree[this.currentDir].content;
    }
  }
});
</script>

<style>

</style>
