<template>
  <v-container class="grey lighten-10">
    <v-row style="height: 50px;">
      <v-col>
        <h1 class="headline" dense outline >Choose nickname</h1>
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
            :disabled="!form.valid"
            class="mr-2 my-2 ml-2"
            color="white"
            @click="createUser()"
          >
            START
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
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
      this.$router.push("/main-menu");
    }
  }
};
</script>
