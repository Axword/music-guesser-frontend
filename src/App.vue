<template>
  <v-container fluid class="container-main container-width_full flex_container-column">
    <v-container class="container-width_half container-secondary">
      <img id="logo_name-login_page" alt="Vue logo" src="./assets/logo-name.png">
      <SpotifyLogin msg="Spotify Login"/>
    </v-container>
  </v-container>
</template>

<script>
import SpotifyLogin from './components/SpotifyLogin.vue'

export default {
  name: 'App',
  components: {
    SpotifyLogin
  }
}
</script>

<style>
  @import 'styles.css';
</style>
