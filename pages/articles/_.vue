<template>
  <div class="container">

    <Navbar></Navbar>

    <ArticleSearchbar />
    <h1>{{ article.title }}</h1>
    <blockquote>{{ article.description }}</blockquote>
    <ArticleTOC :articleTOC="article.toc"/>
    <hr/>
    <nuxt-content :document="article"/>
    <hr/>
    {{prev}} {{next}}

    <article-prev-next :prev="prev" :next="next"/>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const path = `/${params.pathMatch || ''}`
    const allowedPaths = { $in: [path, `${path}/index`, `${path}index`] };

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
      article,
      prev,
      next
    }
  }
}
</script>
