<template>
  <v-container class="fill-height fluid">
    <v-card class="mx-auto" color="primary" tile>
      <v-card color="indigo-darken-2">
        <v-row justify="center">
          <v-col cols="2">
            <h1 class="headline" outline>Koniec gry</h1>
          </v-col>
        </v-row>
      </v-card>
      <v-row>
        <v-col cols="12" sm="12" md="12">
          <h2 class="text-center my-10">
            Punktacja: {{  songGuesser.host.points }}/{{ songGuesser.number_of_rounds }}</h2>
          <h3></h3>
        </v-col>
      </v-row>
      <v-row justify="center">
          <div class="text-xs-center">
            <v-btn
              class="mr-2 my-10 ml-2 justify-center"
              color="white"
              @click="back()"
            >
              Powrót do poczekalni
            </v-btn>
          </div>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
import State from "../service/state";
export default {
  data: () => ({
    songGuesser: {
      host: { points: 0}
    },
    settings: {},
    radios: "",
    value: "",
    selectedItem: 1,
    rounds: ["3", "5", "10", "20"],
  }),
  async created() {
    await this.fetchSongGuesser("?code=" + State.getRoomId());
    this.songGuesser = JSON.parse(
      JSON.stringify(this.$store.state.room.songGuesser)
    );
  },
  methods: {
    back() {
      this.$router.push("/lobby");
    },
    ...mapMutations(["showMessage"]),
    ...mapActions(["fetchSongGuesser", "startGame"]),
  },
};
</script>
