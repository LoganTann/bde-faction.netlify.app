<template>
  <div>
    <div class="row">
      <div class="col m4">
        <p>&nbsp;</p>

        <client-only>
          <article-searchbar />
        </client-only>
        <br>
        <article-nav v-if="allArticles" :all-articles="allArticles" :current-dir="article.dir" />
      </div>

      <div v-if="article" id="articleContent" class="col m7">
        <social-head
          :title="article.title"
          :description="article.description"
          :image="article.image"
        />
        <h1>{{ article.title }}</h1>
        <ArticleTOC :article-t-o-c="article.toc" />
        <hr>
        <transition name="fade">
          <nuxt-content :document="article" />
        </transition>
        <hr>
        <h4 v-if="prev || next">
          Navigation :
        </h4>
        <article-prev-next :prev="prev" :next="next" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

export default Vue.extend({
  transition (to, from) {
    if (!from) {
      return 'scale'
    }

    if (from.fullPath.startsWith("/articles") && to.fullPath.startsWith("/articles")) {
      return 'fade';
    } else {
      return 'scale';
    }
  },
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
  },
  data () {
    return {
      allArticles: null
    }
  }
});
</script>

<style lang="scss">

.nuxt-content {
  & .toc3 {
	margin-left: 1rem;
  }
  & h2 {
    font-size: 2.56rem;
  }
  & h3 {
	font-size: 2rem;
  }
  & aside {
  	background: #f1f1ef;
	padding: 0.1rem 1rem;
	border-radius: 8px;
  }
  & strong {
    font-weight: bold;
  }
  & ul:not(.browser-default) {
    padding-left: revert;
    list-style-type: initial;

    & li {
      list-style-type: initial;
    }
  }
  & img {
    max-width: 100%;
  }
}
</style>
