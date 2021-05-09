<template>
  <q-list class="rounded-borders col-grow">
    <HomeExpansionListItem v-for="item in list" :key="item.id" :item="item" @open-menu="openMenu" />

    <div>
      <q-item>
        <q-item-section class="q-mb-sm">
          <CommonGroupTitle title="Сервисы" />
        </q-item-section>
      </q-item>

      <div class="row q-gutter-sm q-px-md">
        <q-card class="column col-grow justify-between rounded-borders shadow-1 cursor-pointer height-150">
          <q-card-section class="col-auto">
            <q-icon name="grid_view" color="primary" size="md" />
          </q-card-section>

          <q-card-section class="column q-px-md">
            <div class="text-weight-bold text-body2">Все сервисы</div>
          </q-card-section>
        </q-card>

        <q-card class="column col-grow justify-between rounded-borders shadow-1 cursor-pointer height-150">
          <q-card-section class="col-auto">
            <q-icon name="panorama_fish_eye" color="primary" size="md" />
          </q-card-section>

          <q-card-section class="column q-px-md">
            <div class="text-weight-bold text-body2">Госуслуги</div>
            <div class="text-grey-8">Государственные сервисы</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-separator class="q-mt-xl q-mb-lg" />
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HomeExpansionListItem from './HomeExpansionListItem.vue';
import CommonGroupTitle from 'components/common/CommonGroupTitle.vue';

import HomeExpansionListItemInterface from 'src/types/HomeExpansionListItemInterface';

export default defineComponent({
  name: 'HomeActionExpansionList',

  components: { HomeExpansionListItem, CommonGroupTitle },

  setup() {
    const list: HomeExpansionListItemInterface[] = [
      {
        id: 1,
        title: 'Вклады и счета',
        descriptionTitle: 'Откройте вклад или счёт',
        descriptionText: 'В рублях валюте драгоценных металлах',
        descriptionIcon: 'account_balance_wallet',
        menuName: 'deposits',
      },
      {
        id: 2,
        title: 'Безопасность',
        descriptionTitle: 'Не дайте себя обмануть',
        descriptionText: 'Узнайте об уловках злоумышленников',
        descriptionIcon: 'shield',
        menuName: 'security',
      },
    ];
    const openMenu = (menuName: string): void => console.log(menuName);

    return { list, openMenu };
  },
});
</script>

<style lang="sass" scoped></style>
