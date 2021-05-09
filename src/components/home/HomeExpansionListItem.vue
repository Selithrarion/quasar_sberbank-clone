<template>
  <q-expansion-item class="col-grow" expand-icon-class="text-grey-6">
    <template #header>
      <q-item-section class="text-h6 text-weight-bold"> {{ item.title }} </q-item-section>

      <q-item-section side>
        <div class="row items-center">
          <q-btn icon="add" color="primary" size="md" rounded dense flat @click.stop="$emit('open-menu', item.menuName)" />
        </div>
      </q-item-section>
    </template>

    <div class="row q-mx-md rounded-borders shadow-1 cursor-pointer">
      <q-card-section class="col-auto">
        <q-icon :name="item.descriptionIcon" color="primary" size="sm" />
      </q-card-section>
      <q-card-section class="col q-px-none">
        <div class="text-weight-bold text-body2">{{ item.descriptionTitle }}</div>
        <div>{{ item.descriptionText }}</div>
      </q-card-section>
    </div>

    <q-separator class="q-mt-lg" />
  </q-expansion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePageExpansionListItem',

  components: {},

  props: {
    item: {
      type: Object,
      required: true,
      default: () => null,
    },
  },

  emits: ['open-menu'],

  setup() {
    return {};
  },
});
</script>

<style lang="sass" scoped></style>
