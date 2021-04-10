<template>
  <div id="Blog_home">
    <h1>Liste des articles</h1>
    <div class="" v-for="article in articles"  :key="article.name">

      <h2><router-link :to="article.url">{{article.name}}</router-link></h2>
      <p>{{article.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog-home',
  data() {
    return {
      articles: [
        {name: "coucou", description: "je suis un article !", url: "catValide/artValide"},
        {name: "Me revoilà", description: "je suis un second article !", url: "catValide/artValide"}
      ]
    };
  },
  computed: {
  }
}
</script>

<style>
</style>
