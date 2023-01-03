<template>
  <v-container class="justify-center">
    <v-row>
      <v-col class="justify-center">
        <h1 class="text-center">Co to za piosenka?</h1>
        <!--TODO: Spotify as prop-->
        <p class="text-center">{{ currentTime }}/{{ maxTime }}</p>
        <v-container class="timer-bar justify-center">
          <v-container
            class="timer-value"
            :style="{ width: timePercentage }"
          >
       </v-container>
        </v-container>
      </v-col>
    </v-row>
    <div class="overlay"> <p clas="countdown" :class="{ animate: animate}">{{ countDown }}</p>

    </div>
    <v-row>
      <v-col>
        <v-btn
          @click="checkProperAnswer(songGuesser.choices[0])"
          height="35vh"
          color="red"
          ><p>{{ songGuesser.choices[0] }}</p></v-btn
        >
      </v-col>
      <v-col>
        <v-btn
          @click="checkProperAnswer(songGuesser.choices[1])"
          height="35vh"
          color="blue"
          ><p>{{ songGuesser.choices[1] }}</p></v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          @click="checkProperAnswer(songGuesser.choices[2])"
          height="35vh"
          color="green"
          ><p>{{ songGuesser.choices[2] }}</p></v-btn
        >
      </v-col>
      <v-col>
        <v-btn
          @click="checkProperAnswer(songGuesser.choices[3])"
          height="35vh"
          color="yellow"
          ><p>{{ songGuesser.choices[3] }}</p></v-btn
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
      animate: false,
      countDown: 3,
      interval: null,
      maxTime: 10,
      currentTime: 0,
      songGuesser: {},
      track: new Audio(),
    };
  },
  created() {
    this.songGuesser = JSON.parse(
      JSON.stringify(this.$store.state.room.songGuesser)
    );
    if (this.track.paused) {
      this.changeSong();
    }
  },
  unmounted() {
    this.track.pause();
  },
  computed: {
    timePercentage() {
      return (this.currentTime / this.maxTime) * 100 + "%";
    },
  },
  methods: {
    resetTimer() {
      this.currentTime = 10;
      clearTimeout(this.timer)
      clearTimeout(this.currentTime)
    },
    ...mapActions(["checkAnswer", "startNewRound"]),
    async checkProperAnswer(choice) {
      this.songGuesser.choice = choice;
      this.songGuesser.user_id = State.getUserId();
      await this.checkAnswer(this.songGuesser);
      if (!await this.startNewRound(this.songGuesser)) {
        this.$router.push("/end");
      }
      this.songGuesser = JSON.parse(
        JSON.stringify(this.$store.state.room.songGuesser)
      );
      this.changeSong();
    },
    changeSong() {
      clearInterval(this.interval)
      this.resetTimer()
      this.track.pause();
      this.startCountDown()
      this.track.setAttribute("src", this.songGuesser.preview_url);
      this.track.load();
      this.track.play();
    },
    startCountDown() {
      this.intervalCountDown = setInterval(() => {
        this.countDown--;
        if (this.countDown === 0) {
          clearInterval(this.intervalCountDown);
          this.countDown = "start";
          this.animate = true;
        }
      }, 1000);
      this.countDown = 3;
    }
  },
  watch: {
    currentTime() {
      
      if (this.currentTime != 0) {
        this.interval = setTimeout(() => {
          this.currentTime -= 1;
        }, 1000);
      } else {
        this.checkProperAnswer(null)
      }
    }
  },
};
</script>

<style scoped>
p {
  font-size: 1.5em;
  white-space: normal;
}
button {
  width: 100%;
  height: 100%;
  font-size: 1.5em;
  white-space: normal;
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
.timer {
  font-size: 1.5em;
  white-space: normal;
  color: black
}
.timer-bar {
  padding: 0;
  background-color: #242424;
}

.timer-value {
  background-color: lightgreen;
  transition-duration: 1s;
  transition-timing-function: linear;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0; 
  bottom: 0;
}
.countdown{
  position: absolute;
  bottom: 0;
  right: 0%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: black
}
.animate {
  animation: countdown 1s linear;
}
@keyframes countdown {
  0% {
    opacity: 1;
    font-size: 50px;
  }
  100% {
    opacity: 0;
    font-size: 100px;
  }
}
</style>
