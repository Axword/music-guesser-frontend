<template>
  <v-container class="grey lighten-10">
    <v-row style="height: 50px">
      <v-col>
        <h1 class="headline" dense outline>
          Wybierz nick oraz podaj kod gry
        </h1>
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
        <v-row>
          <v-col>
            <v-text-field label="Kod gry" v-model="user.gameCode" required />
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <v-col cols="12">
          <v-btn
            :disabled="!form.valid"
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
import Auth from "../service/auth";
export default {
  name: "AnnonymousField",
  data() {
    return {
      form: {
        valid: true,
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
        await Auth.login(this.user.name, this.user.gameCode, true);
        this.showMessage({ message: "Dołączono do gry." });
      } catch (err) {
        this.showMessage({ message: err.error, color: "error" });
      }
    },
    ...mapMutations(["showMessage"]),
  },
};
</script>
