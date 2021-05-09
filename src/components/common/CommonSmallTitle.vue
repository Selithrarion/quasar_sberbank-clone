<template>
  <div
    class="text-grey-7 q-mb-md"
    :class="{
      'text-center': center,
      'q-mt-none': noTopMargin,
      'q-mt-md': !noTopMargin,
      'q-mx-sm': !noHorizontalMargin,
    }"
  >
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommonSmallTitle',

  props: {
    title: {
      type: String,
      required: true,
      default: null,
    },
    center: {
      type: Boolean,
      required: false,
      default: false,
    },
    noTopMargin: {
      type: Boolean,
      required: false,
      default: false,
    },
    noHorizontalMargin: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>
