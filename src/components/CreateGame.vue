<template>
  <v-container class="grey lighten-10">
    <v-row style="height: 50px">
      <v-col>
        <h1 class="headline" dense outline>Wybierz nick</h1>
      </v-col>
    </v-row>
    <v-form v-model="form.valid" @submit.prevent="createUser()">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-text-field
              label="Nickname"
              v-model="user.name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <v-col cols="12">
          <v-btn
            :disabled="!user.name"
            class="mr-2 my-2 ml-2"
            color="white"
            @click="loginTo()"
          >
            START
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  name: "CreateGame",
  data() {
    return {
      form: {
        valid: false,
      },
      user: {},
    };
  },
  methods: {
    createUser() {
      this.$router.push("/lobby");
    },
    async loginTo() {
      try {
        await this.$store.dispatch('joinOrCreateRoom', { name: this.user.name });
        this.showMessage({ message: "Pomyślnie stworzono pokój." });
      } catch (err) {
        this.showMessage({ message: err, color: "error" });
      }
    },
    ...mapMutations(["showMessage"]),
  },
};
</script>
