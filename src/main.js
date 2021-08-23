import { createApp } from 'vue'
import App from './App.vue'

import ChoiceTable from './components/ChoiceTable.vue'
import ChoiceTimer from './components/ChoiceTimer.vue'

import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

const app = createApp(App);

app.component('choice-table', ChoiceTable);
app.component('choice-timer', ChoiceTimer);

app.use(router);
app.use(store);
app.use(vuetify);

app.mount('#app');
