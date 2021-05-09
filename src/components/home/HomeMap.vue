<template>
  <div>
    <q-item class="column">
      <q-item-section>
        <CommonGroupTitle title="Офисы и банкоматы" />
      </q-item-section>
      <CommonSmallTitle
        class="q-mx-none q-mt-sm"
        title="А ещё кинотеатры, кафе и другие партнёры сбера"
        no-horizontal-margin
        no-top-margin
      />
    </q-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonGroupTitle from 'components/common/CommonGroupTitle.vue';
import CommonSmallTitle from 'components/common/CommonSmallTitle.vue';

export default defineComponent({
  name: 'HomeMap',

  components: { CommonGroupTitle, CommonSmallTitle },
});
</script>
