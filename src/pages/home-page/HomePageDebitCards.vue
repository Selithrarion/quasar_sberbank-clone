<template>
  <q-page class="home-page-debit-cards q-px-xs q-py-sm">
    <q-card
      v-for="card in cardsData"
      :key="card.id"
      class="home-page-debit-cards__card"
      :style="{ backgroundColor: card.color }"
      :dark="card.dark"
      flat
    >
      <q-card-section>
        <div class="text-h6">{{ card.title }}</div>
        <div class="text-body-2">{{ card.description }}</div>
      </q-card-section>
      <q-card-section class="text-caption row col-grow justify-end items-end">
        {{ card.price }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePageDebitCards',

  components: {},

  setup() {
    const cardsData = [
      {
        id: 1,
        title: 'СберКарта',
        description: 'Чем чаще пользуетесь, тем она выгоднее',
        price: 'Бесплатно или 1$ в месяц',
        color: '#289a81',
        dark: true,
      },
      {
        id: 2,
        title: 'Молодёжная',
        description: 'Как Классическая, только выгоднее: специально для тех, кому от 14 до 25 лет',
        price: 'Бесплатно или 1$ в месяц',
        color: '#2ac189',
        dark: true,
      },
      {
        id: 3,
        title: 'Цифровая',
        description: 'Карта, которую не надо ждать — пользуйтесь сразу после оформления',
        price: 'Бесплатно',
        color: '#32e15a',
        dark: true,
      },
      {
        id: 4,
        title: 'СберКарта Travel',
        description: 'Мультивалютная карта для выгодных путешествий',
        price: 'Бесплатно',
        color: '#47e5d0',
        dark: true,
      },
      {
        id: 5,
        title: 'Классическая',
        description: 'Удобная и надёжная карта с бонусами от партнёров',
        price: '10$ в первый год, потом 6$ в год',
        color: '#e9e9e9',
        dark: false,
      },
    ];

    return { cardsData };
  },
});
</script>

<style lang="sass" scoped>
.home-page-debit-cards
  &.q-page
    background-color: white !important
  &__card:not(:last-child)
    margin-bottom: 4px
  &__card
    display: flex
    flex-flow: column
    height: 180px
</style>
