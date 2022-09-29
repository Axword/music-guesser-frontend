<template>
  <v-container class="fill-height fluid">
    <v-card color="primary">
      <v-card color="indigo-darken-2">
        <v-row justify="center">
          <v-col cols="5">
            <h1 class="headline" dense outline>Register to Song Guesser</h1>
          </v-col>
        </v-row>
      </v-card>
      <v-form v-model="form.valid" @submit.prevent="createUser()">
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                label="Nickname"
                v-model="user.name"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                label="E-mail addres"
                v-model="user.mail"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                label="Password"
                v-model="user.password"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-row>
          <v-col cols="2">
            <v-btn
              :disabled="!form.valid"
              class="ml-4"
              color="white"
              @click="createUser()"
            >
              REGISTER
            </v-btn>
          </v-col>
          <v-col cols="1">
            <v-btn :disabled="!form.valid" color="white" @click="back()">
              BACK
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "LoginField",
  data() {
    return {
      form: {
        valid: true,
      },
      user: {},
    };
  },
  methods: {
    back() {
      this.$router.push("/login");
    },
    createUser() {
      this.$router.push("/lobby");
    },
  },
};
</script>
