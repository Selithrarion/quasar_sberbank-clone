import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/home',
        component: () => import('pages/Index.vue'),
      },
      {
        path: '/home/notifications',
        component: () => import('pages/home-page/HomePageNotifications.vue'),
        meta: {
          title: 'Уведомления',
        },
      },
      {
        path: '/home/notifications/settings',
        component: () => import('pages/home-page/HomePageNotificationsSettings.vue'),
        meta: {
          title: 'Уведомления от банка',
        },
      },
      {
        path: '/home/debit-cards',
        component: () => import('pages/home-page/HomePageDebitCards.vue'),
        meta: {
          title: 'Дебетовые карты',
        },
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
