<template>
  <v-container class="fill-height fluid">
    <v-card class="mx-auto" color="primary" tile>
      <v-card color="indigo-darken-2">
        <v-row justify="center">
          <v-col cols="2">
            <h1 class="headline" dense outline>Start game</h1>
          </v-col>
        </v-row>
      </v-card>
      <v-row>
        <v-col cols="4" class="my-3">
          <v-btn class="mr-2 ml-12" color="white" @click="back()"> BACK </v-btn>
        </v-col>
        <v-col cols="6" class="my-3">
          <h1>Settings</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-card color="red darken-2" class="ml-6" outlined sharped dark>
            <h2 class="ml-6">Players</h2>
            <v-list-item v-for="(item, i) in items" :key="i">
              <span color="primary"> {{ item.text }}</span>
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
            <v-row>
              <v-col cols="4" sm="4" md="4">
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
              </v-col>
              <v-col
                v-if="radios == 'spotify'"
                cols="6"
                sm="6"
                md="6"
                class="mt-10"
              >
                <v-select
                  label="Select playlist from your account"
                  v-model="settings.mail"
                  :items="playlists"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  label="Playlist URL"
                  v-model="settings.mail"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  label="Password"
                  v-model="settings.password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12"> </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  label="Password"
                  v-model="settings.password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" sm="2" md="2">
                <v-btn class="mr-2 my-2 ml-2" color="white" @click="invite()">
                  INVITE
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
export default {
  data: () => ({
    settings: {},
    radios: "",
    value: "",
    selectedItem: 1,
    items: [
      { text: "Empty" },
      { text: "Empty" },
      { text: "Empty" },
      { text: "Empty" },
      { text: "Empty" },
      { text: "Empty" },
      { text: "Empty" },
      { text: "Empty" },
      { text: "Empty" },
      { text: "Empty" },
      { text: "Empty" },
      { text: "Empty" },
      { text: "Empty" },
      { text: "Empty" },
    ],
    playlists: ["80s", "90s"],
  }),
  methods: {
    back() {
      this.$router.push("/login");
    },
    start() {
      this.$router.push("/game");
    },
    invite() {},
  },
};
</script>
