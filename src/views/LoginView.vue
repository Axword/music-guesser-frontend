<template>
  <v-container class="justify-center">
    <v-card elevation="2" color="primary" outlined>
      <v-tabs
        background-color="indigo-darken-2"
        theme="dark"
        v-model="tabs"
      >
        <v-tab value="annonymous"> Anonymous </v-tab>
        <v-tab value="login"> Login </v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tabs">
          <v-window-item value="annonymous">
            <AnonnymousField />
          </v-window-item>

          <v-window-item value="login">
            <LoginField />
          </v-window-item>

        </v-window>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import AnonnymousField from "@/components/AnonnymousField.vue";
import LoginField from "@/components/LoginField.vue";
export default {
  components: { AnonnymousField, LoginField },
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
