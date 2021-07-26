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
        {{generateBetterStructure(allArticles)}}
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
export default {
  methods: {
    generateBetterStructure(allArticles) {
      const result = {};
      // Will convert the path list into a tree
      for (const article of allArticles) {
        if (typeof result[article.dir] !== "object") {
          result[article.dir] = { content: [], sortBy: "createdAt" };
        }
        const refDir = result[article.dir];

        switch (article.slug) {
          case '0':
            refDir.sortBy = "slug";
            // fall through
          case 'index': {
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
      return result;
    }
  },
  async asyncData ({ $content, params, error }) {
    const path = `/${params.pathMatch || ''}`
    const allowedPaths = { $in: [path, `${path}/index`, `${path}index`, `${path}/0`, `${path}0`] };

    const allArticles = await $content({ deep: true })
      .only(['title', 'description', 'slug', 'path', 'dir', 'path', 'createdAt', 'updatedAt'])
      .fetch();

    const [article] = await $content({ deep: true })
      .where({ path: allowedPaths })
      .fetch()

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found. Path : ' + path })
    }

    const [prev, next] = await $content({ deep: true })
      .only(['title', 'path'])
      .where({ dir: article.dir })
      .sortBy('path', 'asc')
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
