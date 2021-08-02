<template>
  <div>
    <Navbar>
      <ArticleSearchbar />
    </Navbar>
    <div class="row">
      <div class="col m3 push-m1">
        <article-nav :all-articles="allArticles" :current-dir="article.dir" />
      </div>

      <div class="col m7 push-m1">
        <h1>{{ article.title }}</h1>
        <ArticleTOC :article-t-o-c="article.toc" />
        <hr>
        <nuxt-content :document="article" />
        <hr>
        <h4 v-if="prev || next">Navigation : </h4>
        <article-prev-next :prev="prev" :next="next" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

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
      .sortBy('createdAt', 'desc')
      .surround(article.path)
      .fetch()
      ) as Array<IContentDocument>

    return {
      allArticles,
      article,
      prev,
      next
    }
  }
});
</script>
