<template>
  <span class="new badge blue lighten-3 dark-text">{{ isoToDate }}</span>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';

export default Vue.extend({
  props: {
    iso: {
      type: String,
      required: true,
      validator: (value: string) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/g.test(value)
    } as PropOptions<string>
  },
  computed: {
    isoToDate () {
      return (this.iso as string) // 2021-08-02T22:22:09(something)
        .split('T')[0] // 2021-08-02
        .split('-').reverse().join('/'); // 02/08/2021
    }
  }
});
</script>

<style>
span.badge.new::after {
  content: "";
}
</style>
