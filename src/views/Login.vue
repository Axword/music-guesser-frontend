<template>
    <div class="main-container">
      <img id="logo_name" alt="Vue logo" src="../assets/logo-name.png">
      <button @click="authSpotifyUser" id="button_spotify">
        <img id="logo_spotify" alt="Spotify Login" src="../assets/logo-spotify-name.png"/>
      </button>
    </div>
</template>

<script>
  export default {
    inject: ['users'],
    methods: {
      authSpotifyUser() {
        //TODO: SPOTIFY API
        this.$router.push('/select');
      }
    }
  }
</script>

<style scoped>
  button {
    height: auto;
    width: 30%;

    background-color: #191414;
    border-radius: 100px;
  }

  #logo_name {
    width: 70%;
    height: auto;
  }

  #logo_spotify {
    width: 60%;
    height: auto;
    margin: 3%;
  }

  #button_spotify:hover {
    box-shadow: 0px 0px 5px #1db954;
    transition: 0.2s;
  }

</style>
