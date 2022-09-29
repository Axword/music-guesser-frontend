<template>
  <v-app
    style="
      background: #3a1c71;
      background: -webkit-linear-gradient(to right, #ffaf7b, #d76d77, #3a1c71);
      background: linear-gradient(to right, #ffaf7b, #d76d77, #3a1c71);
    "
  >
    <v-snackbar top v-model="snackbar" :color="snackbarColor"
      >{{ snackbarMessage }}
    </v-snackbar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "App",

  data() {
    return {};
  },
  computed: {
    snackbar: {
      get() {
        console.log("isSnackbarOpened");
        return this.isSnackbarOpened;
      },
      set() {
        this.hideMessage();
      },
    },

    ...mapGetters(["isSnackbarOpened"]),
    ...mapGetters({
      snackbarMessage: "getSnackbarMessage",
      snackbarColor: "getSnackbarColor",
    }),
  },
  methods: {
    ...mapMutations(["hideMessage"]),
  },
};
</script>
<style>
.v-snack__content {
  white-space: pre-line;
}
h2 {
  font-size: 200%;
  font-weight: 450;
}
h1 {
  font-weight: 500;
}
</style>
