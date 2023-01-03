import { createWebHistory, createRouter } from "vue-router";
import LoginView from "../views/LoginView.vue";
import SelectMode from "../views/SelectMode.vue";
import Game from "../views/Game.vue";
import RegisterView from "../views/RegisterView.vue";
import EndGameScreen from '../views/EndGameScreen.vue'


const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/end',
    name: 'end',
    component: EndGameScreen,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/lobby',
    name: 'mainMenu',
    component: SelectMode,
  },
  {
    path: '/game',
    name: 'game',
    component: Game,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
  {
    path: '/:notFound(.*)',
    redirect: '/login'
  },
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
});

export default router;