<template>
  <div>
    <Navbar>
      <ArticleSearchbar />
    </Navbar>
    <div class="row">
      <div class="col m3 push-m1">
        <h4>Liste des articles</h4>
        <ul class="browser-default">
          <li v-for="post of allArticles">
            <article-link :to="post.path">{{post.title}}</article-link>
          </li>
        </ul>

        {{allArticles}}
      </div>

      <div class="col m7 push-m1">
        <h1>{{ article.title }}</h1>
        <ArticleTOC :articleTOC="article.toc"/>
        <hr>
        <nuxt-content :document="article"/>
        <hr>
        <h4>Navigation : </h4>
        <article-prev-next :prev="prev" :next="next"/>
      </div>
    </div>
  </div>
</template>

<script>

/*
/
/dir/
/dir/other/another
/dir/other/

 */
export default {
  /* methods: {
    articlesInCategory(currentArticle, allArticles) {
      const dir = currentArticle.dir;
      const result = [];
      for (article of allArticles) {
        if (article.dir == dir) {
          result.push({})
        }
      }


      return result;
    }
  } */

  async asyncData ({ $content, params, error }) {
    const path = `/${params.pathMatch || ''}`
    const allowedPaths = { $in: [path, `${path}/index`, `${path}index`] };

    const allArticles = await $content({ deep: true })
      .only(['title', 'description','slug', 'path', 'dir', 'path', 'createdAt', 'updatedAt'])
      .fetch();

    const [article] = await $content({ deep: true })
      .where({ path: allowedPaths })
      .fetch()

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found. Path : ' + path })
    }

    const [prev, next] = await $content({ deep: true })
      .only(['title', 'path'])
      .sortBy('path | createdAt', 'asc')
      .surround(article.path)
      .fetch()

    return {
      allArticles,
      article,
      prev,
      next
    }
  }
}
</script>
