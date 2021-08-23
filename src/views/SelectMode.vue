<template>
    <v-container>
      <v-btn @click="goAuthor" color="primary" height="80vh" width="50%">
        <h1>AUTHOR</h1>
      </v-btn>
      <v-btn @click="goPlaylist" color="primary" height="80vh" width="50%">
        <h1>PLAYLIST</h1>
      </v-btn>
    </v-container>  
</template>

<script>
  export default {
    methods: {
      goAuthor() {
        this.$router.push('/author');
      },
      goPlaylist() {
        this.$router.push('/playlist');
      },
    }
  }
</script>
