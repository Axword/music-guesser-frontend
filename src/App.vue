<template>
  <v-app
    style="
      background: #3a1c71;
      background: -webkit-linear-gradient(to right, #ffaf7b, #d76d77, #3a1c71);
      background: linear-gradient(to right, #ffaf7b, #d76d77, #3a1c71);
    "
  >
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
