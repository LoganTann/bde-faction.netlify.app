<template>
  <div>
    <article-link v-if="prev !== ''" :to="prev.path">
      {{ prev.title }} &lt;
    </article-link>
    <article-link v-if="next !== ''" :to="next.path">
      &gt; {{ next.title }}
    </article-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    prev: { type: String, default: '' },
    next: { type: String, default: '' }
  }
});
</script>
