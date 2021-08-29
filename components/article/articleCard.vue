<template>
  <card :date="articleInfo.createdAt" link-name="Lire l'article" link-type="article" :link-u-r-l="articleInfo.path" :title="articleInfo.title">
    {{ articleInfo.description || "erreur" }}
  </card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { extendOrOverwrite, IContentDocument } from "@nuxt/content/types/content";

export default Vue.extend({
  name: "ArticleCard",
  props: {
    // path: { type: String, default: null },
    article: { type: Object as PropType<IContentDocument>, required: true }
  },
  data () {
    return {
      articleInfo: Object as extendOrOverwrite<IContentDocument>
    };
  },
  created () {
    this.articleInfo = this.article;
  }
  /*
    Ragequit :

  async fetch () {
    if (this.article) {
      this.articleInfo = this.article;
    } else if (this.path && !this.$nuxt.$isServer) {
      const self = this;
      await fetch(`${this.$nuxt.$isServer ? "https://www.bde-faction.fr" : ""}/_content/${self.path}`)
        .then(res => res.json())
        .then((res) => {
          self.articleInfo = res as IContentDocument;
        })
        .catch(function (e) { console.error(`/_content/${self.path} : `, e) })
    }
  } */
});
</script>

<style scoped>

</style>
