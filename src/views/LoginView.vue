<template>
  <v-container class="justify-center">
    <v-card elevation="2" color="primary" outlined>
      <v-tabs
        background-color="indigo-darken-2"
        theme="dark"
        v-model="tabs"
      >
        <v-tab value="createGame"> Stwórz grę </v-tab>
        <v-tab value="joinGame"> Dołącz do gry </v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tabs">
          <v-window-item value="createGame">
            <CreateGame />
          </v-window-item>

          <v-window-item value="joinGame">
            <JoinGame />
          </v-window-item>

        </v-window>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import CreateGame from "@/components/CreateGame.vue";
import JoinGame from "@/components/JoinGame.vue";
export default {
  components: { CreateGame, JoinGame },
  data() {
    return {
      tabs: null,
    };
  },
  methods: {
    authSpotifyUser() {
      //TODO: SPOTIFY API
      this.$router.push("/select");
    },
  },
};
</script>

<style scoped></style>
