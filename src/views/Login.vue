<template>
  <v-container class="justify-center">
    <v-card elevation="2" color="primary" outlined>
      <v-card-title class="justify-center">
        <v-img src="../assets/logo-name.png" size="small"></v-img>
      </v-card-title>
      
      <v-card-actions class="justify-center">
        <v-btn @click="authSpotifyUser" color="black" size="x-large" width="30%">
          Login &nbsp;
          <v-icon>mdi-spotify</v-icon>
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-container>
</template>

<script>
  export default {
    methods: {
      authSpotifyUser() {
        //TODO: SPOTIFY API
        this.$router.push('/select');
      }
    }
  }
</script>

<style scoped>

</style>
