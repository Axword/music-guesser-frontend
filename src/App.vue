<template>  
  <v-app>
    <v-main>
        <!--------------------------------------------------------------------Uncomment to check users--
        <ul>    
          <li v-for="user in this.users" :key="user.id">{{ user.nick }}</li>
        </ul>
        -->
        <top-nav v-if="$route.path != '/login'"></top-nav> 
        <v-container class="justify-center">
          <router-view></router-view>
        </v-container>
      </v-main>
  </v-app>
</template>

<script>
import TopNav from './components/TopNav.vue'

import User from './classes/user';
import Fetcher from './classes/fetcher';

export default { 
  components: {
    'top-nav': TopNav,
  },
  data() {
    return {
      usersDbUrl: 'https://song-guesser-caa2c-default-rtdb.europe-west1.firebasedatabase.app/users.json',
      userFilip: new User('1', 'FlipFlop', 'filip.tomczyk00@gmail.com', 0),
      users: []
    };
  },
  methods: {
    populateUsers() {
      setTimeout( () => {
        if(!Fetcher.getResponseStatus())
          this.populateUsers();
        else
          this.users = Fetcher.getActiveData();
      }, 200);
    }
  },
  mounted() {
    Fetcher.getData(this.usersDbUrl);
    this.populateUsers();
  },
}
</script>