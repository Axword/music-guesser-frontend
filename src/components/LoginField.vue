<template>
  <v-container class="grey lighten-10">
    <v-row style="height: 50px">
      <v-col>
        <h1 class="headline" dense outline>Login to Song Guesser</h1>
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
        <v-col cols="8">
          <v-btn
            :disabled="!form.valid"
            class="mr-2 my-2 ml-2"
            color="white"
            @click="login()"
          >
            LOGIN
          </v-btn>
        </v-col>
        <v-col cols="4">
          <a href="http://localhost:8081/register">
            <span> Don't have an acccount?</span>
          </a>
        </v-col>
      </v-row>
    </v-form>
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
    login() {
      this.$router.push("/main-menu");
    },
  },
};
</script>

<style>
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: white;
  background-color: transparent;
  text-decoration: underline;
}
</style>
