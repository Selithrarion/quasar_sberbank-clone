<template>
  <span class="text-h6 text-black q-pl-lg q-pr-sm">
    {{ props.title }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'LayoutHeaderTitle',

  props: {
    title: {
      type: String,
      required: true,
      default: null,
    },
  },

  setup(props) {
    return {
      props,
    };
  },
});
</script>

<style scoped></style>
