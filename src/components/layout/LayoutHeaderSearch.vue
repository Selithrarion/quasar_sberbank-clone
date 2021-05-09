<template>
  <q-input
    :model-value="search"
    class="layout-header-search col-grow"
    type="search"
    debounce="300"
    placeholder="Поиск"
    standout="bg-white text-black"
    rounded
    dense
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LayoutHeaderSearch',

  setup() {
    const search = ref('');

    return {
      search,
    };
  },
});
</script>

<style lang="sass" scoped>
.layout-header-search
  ::v-deep(.q-field__control)
    background: #39b4a4
  ::v-deep(.q-placeholder)
    color: white
</style>
