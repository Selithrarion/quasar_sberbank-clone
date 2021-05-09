<template>
  <q-page>
    <div class="overflow-auto no-scroll row no-wrap">
      <span v-for="item in chipsData" :key="item.id" @click="selectFilter(item.value)">
        <q-chip :selected="item.value === filter" :square="item.value === filter">{{ item.title }}</q-chip>
      </span>
    </div>

    <div class="q-pt-sm">
      <div>
        <CommonSmallTitle title="3 дня назад" center />
        <q-card class="q-mx-sm" flat>
          <q-card-section class="row justify-between items-center q-pb-none">
            <span class="text-weight-bold">Перевод СберБанк Онлайн</span>
            <span class="text-caption text-grey-8">8:21</span>
          </q-card-section>

          <q-card-section class="q-py-sm">
            <div class="text-h4">5 000 $</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div>
              MasterCard
              <q-icon name="more_horiz" color="grey-7" size="xs" />
              7127
            </div>
            <div>Баланс: 12 123 $</div>
          </q-card-section>
        </q-card>
      </div>

      <div>
        <CommonSmallTitle title="21 апреля" center />
        <q-card class="q-mx-sm q-my-xs" flat>
          <q-card-section class="row justify-between items-center q-pb-none">
            <span class="text-weight-bold">Перевод СберБанк Онлайн</span>
            <span class="text-caption text-grey-8">8:21</span>
          </q-card-section>

          <q-card-section class="q-py-sm">
            <div class="text-h4">5 000 $</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div>
              MasterCard
              <q-icon name="more_horiz" color="grey-7" size="xs" />
              7127
            </div>
            <div>Баланс: 12 123 $</div>
          </q-card-section>
        </q-card>
        <q-card class="q-mx-sm q-my-xs" flat>
          <q-card-section class="row justify-between items-center q-pb-none">
            <span class="text-weight-bold">Перевод СберБанк Онлайн</span>
            <span class="text-caption text-grey-8">8:21</span>
          </q-card-section>

          <q-card-section class="q-py-sm">
            <div class="text-h4">5 000 $</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div>
              MasterCard
              <q-icon name="more_horiz" color="grey-7" size="xs" />
              7127
            </div>
            <div>Баланс: 12 123 $</div>
          </q-card-section>
        </q-card>
        <q-card class="q-mx-sm q-my-xs" flat>
          <q-card-section class="row justify-between items-center q-pb-none">
            <span class="text-weight-bold">Перевод СберБанк Онлайн</span>
            <span class="text-caption text-grey-8">8:21</span>
          </q-card-section>

          <q-card-section class="q-py-sm">
            <div class="text-h4">5 000 $</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div>
              MasterCard
              <q-icon name="more_horiz" color="grey-7" size="xs" />
              7127
            </div>
            <div>Баланс: 12 123 $</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CommonSmallTitle from 'components/common/CommonSmallTitle.vue';

export default defineComponent({
  name: 'HomePageNotifications',

  components: { CommonSmallTitle },

  setup() {
    const chipsData = [
      {
        id: 1,
        title: 'Все',
        value: 'all',
      },
      {
        id: 2,
        title: 'Списания',
        value: 'write-offs',
      },
      {
        id: 3,
        title: 'Зачисления',
        value: 'credits',
      },
      {
        id: 4,
        title: 'Наличные',
        value: 'cash',
      },
      {
        id: 5,
        title: 'Переводы',
        value: 'transfers',
      },
      {
        id: 6,
        title: 'Госуведомления',
        value: 'state-notices',
      },
    ];

    const filter = ref<string | null>(null);
    const selectFilter = (value: string) => (filter.value = value);

    return { chipsData, filter, selectFilter };
  },
});
</script>

<style lang="sass" scoped></style>
