<template>
  <div class="column col-grow">
    <q-item>
      <q-item-section class="q-mb-sm">
        <CommonGroupTitle title="Рекомендуем" />
      </q-item-section>
    </q-item>
    <div class="row q-gutter-sm q-px-md">
      <q-card class="column col-grow shadow-1 height-150">
        <q-card-section>Подкасты</q-card-section>
      </q-card>
      <q-card class="column col-grow shadow-1 height-150">
        <q-card-section>Плейлист</q-card-section>
      </q-card>
    </div>
    <q-separator class="q-mt-xl q-mb-lg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonGroupTitle from 'components/common/CommonGroupTitle.vue';

export default defineComponent({
  name: 'HomeRecommendations',

  components: { CommonGroupTitle },
});
</script>
