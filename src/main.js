import { createApp } from 'vue';
import App from './App.vue';

import TopNav from './components/TopNav.vue'

import Router from './router';
//import store from './store';

const app = createApp(App);

app.component('top-nav', TopNav);

//app.use(store);
app.use(Router);

app.mount("#app");
