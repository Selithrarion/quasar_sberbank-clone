<template>
  <LayoutHeaderSearch v-if="isHomePage" />

  <q-space />

  <span v-if="isHomePage">
    <q-btn class="q-mr-xs" icon="bookmark_border" to="/home/bookmarks" rounded dense flat />
    <q-btn icon="notifications_none" to="/home/notifications" rounded dense flat />
  </span>

  <span v-if="isNotifications">
    <q-btn class="q-mr-sm" color="primary" icon="search" to="/home/notifications" rounded dense flat />
    <q-btn color="primary" icon="more_vert" rounded dense flat>
      <q-menu class="min-width-200">
        <q-list>
          <q-item v-close-popup v-ripple to="/home/notifications/settings" clickable>
            <q-item-section>Настройки</q-item-section>
          </q-item>
          <q-item v-close-popup v-ripple clickable>
            <q-item-section>Выбрать уведомления</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import LayoutHeaderSearch from '../LayoutHeaderSearch.vue';

export default defineComponent({
  name: 'LayoutHeaderHome',

  components: { LayoutHeaderSearch },

  setup() {
    const route = useRoute();
    const isHomePage = computed(() => route.path === '/home');
    const isNotifications = computed(() => route.path === '/home/notifications');
    const isBookmarks = computed(() => route.path === '/home/bookmarks');

    return { isHomePage, isNotifications, isBookmarks };
  },
});
</script>

<style scoped></style>
