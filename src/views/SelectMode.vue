<template>
  <v-container class="fill-height fluid">
    <v-card class="mx-auto" color="primary" tile>
      <v-card color="indigo-darken-2">
        <v-row justify="center">
          <v-col cols="2">
            <h1 class="headline" outline>Zacznij grę</h1>
          </v-col>
        </v-row>
      </v-card>
      <v-row>
        <v-col cols="4" class="my-3">
          <v-btn class="mr-2 ml-12" color="white" @click="back()"> WRÓĆ </v-btn>
        </v-col>
        <v-col cols="6" class="my-3">
          <h1>Ustawienia</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-card color="indigo-darken-2" class="ml-6" outlined sharped dark>
            <h2 class="ml-6">Gracze</h2>
            <v-list-item v-for="(player, i) in songGuesser.players" :key="i">
              <span color="primary"> {{ player.name }}</span>
            </v-list-item>
          </v-card>
        </v-col>
        <v-card
          class="mx-auto mb-5"
          min-width="700"
          color="indigo-darken-1"
          tile
        >
          <v-col>
            <!-- <v-row> -->
            <!-- <v-col cols="4" sm="4" md="4">
                <v-radio-group v-model="radios">
                  <template v-slot:label>
                    <strong>Select playlist info</strong>
                  </template>
                  <v-radio value="spotify">
                    <template v-slot:label>
                      <strong>Spotify</strong>
                    </template>
                  </v-radio>
                  <v-radio value="soundcloud">
                    <template v-slot:label>
                      <strong>Soundcloud</strong>
                    </template>
                  </v-radio>
                </v-radio-group>
              </v-col> -->
            <!-- <v-col
                v-if="radios == 'spotify'"
                cols="4"
                sm="4"
                md="4"
                class="m-10"
              >
              </v-col> -->
            <!-- </v-row> -->
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  label="Link do playlisty spotify"
                  v-model="songGuesser.playlist_url"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" sm="6" md="6">
                <v-select
                  label="Liczba rund"
                  v-model="songGuesser.number_of_rounds"
                  :items="rounds"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" sm="2" md="2">
                <v-btn class="mr-2 my-2 ml-2" color="white" @click="invite()">
                  ZAPROŚ
                </v-btn>
              </v-col>
              <v-col cols="2" sm="2" md="2">
                <v-btn class="mr-2 my-2 ml-2" color="white" @click="start()">
                  START
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-row>
    </v-card>
  </v-container>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
import State from "../service/state";
export default {
  data: () => ({
    songGuesser: {},
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
      this.$router.push("/login");
    },
    async start() {
      const game_started = await this.startGame(this.songGuesser);
      if (game_started)
        this.$router.push("/game");
    },
    async invite() {
      await navigator.clipboard.writeText(
        "localhost:8080/lobby/" + State.getRoomId()
      );
    },
    ...mapMutations(["showMessage"]),
    ...mapActions(["fetchSongGuesser", "startGame"]),
  },
};
</script>
