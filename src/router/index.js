import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import SelectMode from "../views/SelectMode.vue";
import GameAuthor from "../views/GameAuthor.vue";
import GamePlaylist from "../views/GamePlaylist.vue";

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/select',
    name: 'select',
    component: SelectMode,
  },
  {
    path: '/author',
    name: 'author',
    component: GameAuthor,
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: GamePlaylist,
  },
  {
    path: '/:notFound(.*)',
    redirect: '/login'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;