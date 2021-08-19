import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/Login.vue";
import SelectMode from "../views/SelectMode.vue";
import GameAuthor from "../views/GameAuthor.vue";
import GamePlaylist from "../views/GamePlaylist.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/select",
    name: "SelectMode",
    component: SelectMode,
  },
  {
    path: "/author",
    name: "GameAuthor",
    component: GameAuthor,
  },
  {
    path: "/playlist",
    name: "GamePlaylist",
    component: GamePlaylist,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;