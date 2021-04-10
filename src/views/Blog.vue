<template>
  <div id="blogBody">
    <blog-sidenav />
    <blog-article v-if="valid()"/>
    <blog-home v-else/>
  </div>
</template>

<script>

const blogSidenav = () => import('@/components/blog/sidenav.vue');
const blogArticle = () => import('@/components/blog/article.vue');
const blogHome = () => import('@/components/blog/home.vue');

export default {
  name: 'Blog',
  components: {
    blogSidenav, blogArticle, blogHome
  },
  data() {
    return {
    };
  },
  methods: {
    valid() {
      return this.$route.params.category == "catValide"
          && this.$route.params.article_name == "artValide";
    }
  }
}
</script>

<style>
#blogBody {
    display: flex;
}
#blog>div:last-child {
  flex-grow: 1;
}

</style>
