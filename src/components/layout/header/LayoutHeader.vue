<template>
  <q-header
    :class="{ 'bg-white': isRootPages }"
    :style="[isSubheaderHidden ? 'z-index: 100' : 'z-index: -1', { background: getRootHeaderBackground }]"
    bordered
  >
    <q-toolbar>
      <q-avatar v-if="isRootPages">
        <img
          src="https://w7.pngwing.com/pngs/109/994/png-transparent-teacher-student-college-school-education-avatars.png"
          alt="Avatar"
        />
      </q-avatar>
      <q-btn v-else color="primary" icon="arrow_back" rounded dense flat @click="goBack" />

      <LayoutHeaderTitle v-if="!isRootPages" :title="pageTitle" />

      <q-space />

      <LayoutHeaderHome v-if="isHomePages" />

      <!--      <q-btn v-if="isPaymentsPage" icon="qr_code" to="/qr_code" rounded dense flat />-->
      <!--      <q-btn v-if="isDialogsPage" icon="more_vert" rounded dense flat @click="openDialogsSettingsMenu"/>-->
    </q-toolbar>

    <div v-if="isRootPages" v-show="!isSubheaderHidden" class="height-200">
      <q-scroll-observer @scroll="onScroll" />
    </div>
  </q-header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import LayoutHeaderHome from './LayoutHeaderHome.vue';
import LayoutHeaderTitle from './parts/LayoutHeaderTitle.vue';

import QuasarScrollInterface from 'src/types/quasarScrollInterface.js';

export default defineComponent({
  name: 'LayoutHeader',

  components: { LayoutHeaderHome, LayoutHeaderTitle },

  props: {
    isRootPages: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  setup(props) {
    const route = useRoute();
    const router = useRouter();

    const isHomePages = computed(() => route.path.split('/')[1] === 'home');
    const isPaymentsPages = computed(() => route.path.split('/')[1] === 'payments');
    const isDialogsPages = computed(() => route.path.split('/')[1] === 'dialogs');
    const isHistoryPages = computed(() => route.path.split('/')[1] === 'history');
    const pageTitle = computed(() => route.meta.title);
    const goBack = () => router.go(-1);

    const scrollTopPosition = ref<number>(0);
    const isSubheaderHidden = computed((): boolean => {
      if (!props.isRootPages) return true;
      return scrollTopPosition.value >= 100;
    });
    const onScroll = (value: QuasarScrollInterface): void => {
      scrollTopPosition.value = value.position.top;
    };

    const getRootHeaderBackground = computed(() => {
      if (!props.isRootPages) return 'white';
      return isSubheaderHidden.value
        ? 'linear-gradient(#5cd8c1, #57d0cc) !important'
        : 'linear-gradient(#5cd8c1, #3faef5) !important';
    });

    return {
      isHomePages,
      isPaymentsPages,
      isDialogsPages,
      isHistoryPages,
      pageTitle,
      goBack,

      onScroll,
      scrollTopPosition,
      isSubheaderHidden,
      getRootHeaderBackground,
    };
  },
});
</script>

<style lang="sass" scoped>
.header-root-pages
  color: white
  /*background: linear-gradient(#5cd8c1, #3ff573)*/
</style>
