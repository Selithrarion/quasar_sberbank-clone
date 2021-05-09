<template>
  <q-layout view="hHh lpr lff">
    <LayoutHeader :is-root-pages="isRootPages" />

    <q-page-container :class="{ 'footer-padding': isRootPages }">
      <q-scroll-observer @scroll="onScroll" />
      <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <router-view class="q-py-md" :class="{ 'bg-grey-2': !isRootPages }" :style="{ transform: getPageTransform }" />
      </transition>
    </q-page-container>

    <LayoutFooter v-if="isRootPages" class="footer" />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import LayoutHeader from 'components/layout/header/LayoutHeader.vue';
import LayoutFooter from 'components/layout/LayoutFooter.vue';
import QuasarScrollInterface from 'src/types/quasarScrollInterface';

export default defineComponent({
  name: 'MainLayout',

  components: {
    LayoutHeader,
    LayoutFooter,
  },

  setup() {
    const route = useRoute();
    const rootPages = ['/home', '/payments', 'dialogs', 'history'];
    const isRootPages = computed(() => rootPages.indexOf(route.path) !== -1);

    const scrollTopPosition = ref<number>(0);
    const onScroll = (value: QuasarScrollInterface): void => {
      scrollTopPosition.value = value.position.top;
    };
    const getPageTransform = computed((): string => {
      if (!isRootPages.value) return 'translateY(0)';
      if (scrollTopPosition.value >= 100) return 'translateY(100px)';

      return `translateY(${-scrollTopPosition.value}px)`;
    });

    return { isRootPages, scrollTopPosition, onScroll, getPageTransform };
  },
});
</script>

<style lang="scss" scoped>
.footer-padding {
  padding-bottom: 207px !important;
}
.footer {
  position: fixed !important;
}
</style>
