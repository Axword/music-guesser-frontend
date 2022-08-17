<template>
  <v-card color="primary">
    <choice-timer></choice-timer>
    <choice-table></choice-table>
  </v-card>
</template>

<script>
import ChoiceTable from "@/components/ChoiceTable.vue";
import ChoiceTimer from "@/components/ChoiceTimer.vue";
export default {
  name: "GamePlaylist",
  components: {ChoiceTable, ChoiceTimer},
  data() {
    return {
    };
  },
}
</script>

<style scoped></style>
