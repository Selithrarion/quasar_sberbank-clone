<template>
  <div class="text-h6 text-weight-bold"> {{ title }} </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CommonGroupTitle',

  props: {
    title: {
      type: String,
      required: true,
      default: ''
    }
  },
});
</script>
