<template>
  <q-page>
    <CommonSmallTitle title="Группа 1" no-top-margin />
    <q-card flat>
      <q-card-section> Настройка 1 </q-card-section>
      <q-separator />
      <q-card-section> Настройка 2 </q-card-section>
      <q-separator />
      <q-card-section> Настройка 3 </q-card-section>
      <q-separator />
      <q-card-section> Настройка 4 </q-card-section>
    </q-card>

    <CommonSmallTitle title="Группа 3" />
    <q-card flat>
      <q-card-section> Настройка 5 </q-card-section>
    </q-card>

    <CommonSmallTitle title="Группа 3" />
    <q-card flat>
      <q-card-section> Настройка 6 </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CommonSmallTitle from 'components/common/CommonSmallTitle.vue';

export default defineComponent({
  name: 'HomePageNotificationsSettings',

  components: { CommonSmallTitle },

  setup() {
    return {};
  },
});
</script>
