<template>
  <v-card color="primary">
    <choice-table></choice-table>
  </v-card>
</template>

<script>
import ChoiceTable from "@/components/ChoiceTable.vue";
export default {
  name: "GamePlaylist",
  components: {ChoiceTable},
  data() {
    return {
    };
  },
}
</script>

<style scoped></style>
