<template>
  <q-carousel
    v-model="sliderValue"
    class="rounded-borders col-grow"
    style="height: 200px"
    transition-prev="slide-right"
    transition-next="slide-left"
    control-color="white"
    swipeable
    animated
    padding
  >
    <q-carousel-slide name="card" class="no-wrap flex-center">
      <q-card class="col-auto shadow-1">
        <q-card-section class="row items-center justify-between q-pb-sm">
          <span class="text-h6 text-weight-bold q-pr-lg">Кошелёк</span>
          <q-btn color="primary" icon="add" to="/home/debit-cards" rounded dense flat />
        </q-card-section>

        <q-item v-ripple clickable>
          <q-item-section side>
            <q-icon name="credit_card" color="primary" size="md" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="row justify-between">
              <span class="q-pr-md">MasterCard Mass</span>
              <q-space />
              <q-icon name="rss_feed" />
              <q-icon class="q-px-xs" name="more_horiz" />
              <span>4924</span>
            </q-item-label>

            <q-item-label class="text-h6">12 990.00$</q-item-label>
          </q-item-section>
        </q-item>

        <q-card-actions>
          <q-btn class="text-weight-bold" color="primary" flat>Оформить новую карту</q-btn>
        </q-card-actions>
      </q-card>
    </q-carousel-slide>

    <q-carousel-slide name="finances" class="no-wrap flex-center">
      <q-card class="col-auto shadow-1">
        <q-card-section class="column justify-between q-pb-sm">
          <CommonGroupTitle title="Финансы" />
          <CommonSmallTitle title="Сервисы для полезных привычек" no-top-margin no-horizontal-margin />
        </q-card-section>

        <q-card-actions>
          <q-btn class="text-weight-bold" color="primary" flat>Узнать</q-btn>
        </q-card-actions>
      </q-card>
    </q-carousel-slide>

    <q-carousel-slide name="dialogs" class="no-wrap flex-center"> </q-carousel-slide>

    <q-carousel-slide name="history" class="no-wrap flex-center"> </q-carousel-slide>
  </q-carousel>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CommonGroupTitle from 'components/common/CommonGroupTitle.vue';
import CommonSmallTitle from 'components/common/CommonSmallTitle.vue';

export default defineComponent({
  name: 'HomeCarousel',

  components: { CommonGroupTitle, CommonSmallTitle },

  setup() {
    const sliderValue = ref('card');

    return { sliderValue };
  },
});
</script>

<style lang="sass" scoped></style>
