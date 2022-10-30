<template>
  <v-container class="justify-center">
    <v-row>
      <v-col class="justify-center">
        <h1 class="text-center">Co to za piosenka?</h1>
        <!--TODO: Spotify as prop-->
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          @click="checkProperAnswer(songGuesser.choices[0])"
          height="35vh"
          color="red"
          >{{ songGuesser.choices[0] }}</v-btn
        >
      </v-col>
      <v-col>
        <v-btn
          @click="checkProperAnswer(songGuesser.choices[1])"
          height="35vh"
          color="blue"
          >{{ songGuesser.choices[1] }}</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          @click="checkProperAnswer(songGuesser.choices[2])"
          height="35vh"
          color="green"
          >{{ songGuesser.choices[2] }}</v-btn
        >
      </v-col>
      <v-col>
        <v-btn
          @click="checkProperAnswer(songGuesser.choices[3])"
          height="35vh"
          color="yellow"
          >{{ songGuesser.choices[3] }}</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import State from "../service/state";
import { mapActions } from "vuex";
export default {
  name: "AnnonymousField",
  data() {
    return {
      songGuesser: {},
      track: new Audio()
    };
  },
  created() {
    this.songGuesser = JSON.parse(
      JSON.stringify(this.$store.state.room.songGuesser)
    );
    this.changeSong();
  },
  methods: {
    ...mapActions(["checkAnswer", "startNewRound"]),
    async checkProperAnswer(choice) {
      this.songGuesser.choice = choice;
      this.songGuesser.user_id = State.getUserId();
      await this.checkAnswer(this.songGuesser);
      await this.startNewRound(this.songGuesser);
      this.songGuesser = JSON.parse(
        JSON.stringify(this.$store.state.room.songGuesser)
      );
      this.changeSong();
    },
    changeSong() {
        this.track.pause();
        this.track.setAttribute('src', this.songGuesser.preview_url);
        this.track.load()
        this.track.play();
    }
  },
};
</script>

<style scoped>
button {
  width: 100%;
  height: 100%;
  font-size: 1.5em;
}
table {
  width: 100%;
  height: 100%;
  text-align: center;
}
tr {
  width: 50%;
  height: 40%;
}
.caption {
  width: 50%;
  height: 10%;
}

td {
  width: 50%;
  height: 40%;
}
</style>
