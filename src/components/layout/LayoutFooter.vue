<template>
  <q-footer class="bg-white text-white" bordered>
    <q-tabs :model-value="tab" class="text-grey" narrow-indicator dense no-caps>
      <q-tab v-for="tab in tabsList" :key="tab.id" :label="tab.title" :name="tab.key" :icon="tab.icon" />
    </q-tabs>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LayoutFooter',

  setup() {
    const tab = ref('main');

    return {
      tab,
      tabsList,
    };
  },
});

const tabsList = [
  {
    id: 1,
    title: 'Главная',
    key: 'main',
    icon: 'home',
  },
  {
    id: 2,
    title: 'Платежи',
    key: 'payments',
    icon: 'east',
  },
  {
    id: 3,
    title: 'Диалоги',
    key: 'dialogs',
    icon: 'chat_bubble_outline',
  },
  {
    id: 4,
    title: 'История',
    key: 'history',
    icon: 'schedule',
  },
];
</script>

<style scoped></style>
