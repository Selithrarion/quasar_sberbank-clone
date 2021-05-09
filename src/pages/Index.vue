<template>
  <q-page class="row items-center justify-between bg-white">
    <HomeCarousel />
    <HomeActionExpansionList />
    <HomeRecommendations />
    <HomeMap />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HomeCarousel from 'components/home/HomeCarousel.vue';
import HomeActionExpansionList from 'components/home/HomeActionExpansionList.vue';
import HomeRecommendations from 'components/home/HomeRecommendations.vue';
import HomeMap from 'components/home/HomeMap.vue';

export default defineComponent({
  name: 'PageIndex',

  components: { HomeCarousel, HomeActionExpansionList, HomeRecommendations, HomeMap },
});
</script>
