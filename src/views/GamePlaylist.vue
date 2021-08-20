<template>
    <div>
        <top-nav></top-nav>
        <choice-timer></choice-timer>
        <div class="main-container">     
            <choice-table></choice-table>
        </div>
    </div>
</template>

<script>
import ChoiceTable from '../components/ChoiceTable.vue'
    export default {
  components: { ChoiceTable },
        
    }
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        align-content: flex-start;
        justify-content: flex-start;
    }
</style>