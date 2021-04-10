<template>
  <div id="blog_article">
    <h1>{{article_name}}</h1>
    {{article_body}}
  </div>
</template>

<script>
export default {
  name: 'blog-article',
  data() {
    return {
      article_name: "titre de l'article",
      article_body: `**to be added**
      ~~This is cool~~`
    };
  },
  computed: {
  }
}
</script>

<style>
</style>
