import { createApp } from 'vue';
import App from './App.vue';

import ChoiceTable from './components/ChoiceTable.vue';
import ChoiceTimer from './components/ChoiceTimer.vue';
import TopNav from './components/TopNav.vue';

import Router from './router';
//import store from './store';

const app = createApp(App);

app.component('choice-table', ChoiceTable);
app.component('choice-timer', ChoiceTimer);
app.component('top-nav', TopNav);

//app.use(store);
app.use(Router);

app.mount("#app");
