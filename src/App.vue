<template>  
  <!--------------------------------------------------------------------Uncomment to check users--
  <ul>    
    <li v-for="user in this.users" :key="user.id">{{ user.nick }}</li>
  </ul>
  -->
  <top-nav v-if="$route.path != '/login'"></top-nav> 
  <router-view/>
</template>

<script>
import User from './classes/user';
import Fetcher from './classes/fetcher';

export default { 
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
    this.$router.push({path: '/login'});
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    width: auto;
  }

  body {
    height: 100%;
    width: auto;
    margin: 0;
    padding: 0;

    background: linear-gradient(to bottom right, #1ae3d9, #5c7ce9);
    background-repeat: no-repeat;
    background-size: cover;

    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

  div {
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }

  div.main-container {
    height: 80%;
    width: 50%;

    background-color: white;
    box-shadow: 0px 0px 10px #5c7ce9;
    border-radius: 5px;
    border: 1px solid #5c7ce9;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    width: 100%;
  }
</style>
