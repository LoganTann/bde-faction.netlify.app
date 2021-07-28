<template>
  <div>
    <Navbar>
      <ArticleSearchbar />
    </Navbar>
    <div class="row">
      <div class="col m3 push-m1">
        <h4>Liste des articles</h4>
        <ul class="browser-default">
          <li v-for="post of allArticles" :key="post.path">
            <article-link :to="post.path">
              {{ post.title }}
            </article-link>
          </li>
        </ul>
        {{ allArticles }}
        <hr>
        {{ generateBetterStructure(allArticles) }}
      </div>

      <div class="col m7 push-m1">
        <h1>{{ article.title }}</h1>
        <ArticleTOC :article-t-o-c="article.toc" />
        <hr>
        <nuxt-content :document="article" />
        <hr>
        <h4>Navigation : </h4>
        <article-prev-next :prev="prev" :next="next" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

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
  async asyncData ({ $content, params, error }) {
    const path = `/${params.pathMatch || ''}`
    const allowedPaths = { $in: [path, `${path}/index`, `${path}index`, `${path}/0`, `${path}0`] };

    const allArticles = await $content({ deep: true })
      .only(['title', 'description', 'slug', 'path', 'dir', 'path', 'createdAt', 'updatedAt'])
      .fetch();

    const [article] = (await $content({ deep: true })
      .where({ path: allowedPaths })
      .fetch()
      ) as Array<IContentDocument>

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found. Path : ' + path })
    }

    const [prev, next] = (await $content({ deep: true })
      .only(['title', 'path'])
      .where({ dir: article.dir })
      .sortBy('path', 'asc')
      .surround(article.path)
      .fetch()
      ) as Array<IContentDocument>

    return {
      allArticles,
      article,
      prev,
      next
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
    }
  }
});
</script>
