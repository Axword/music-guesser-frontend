<template>
    <v-container class="timer-bar justify-center">
        <v-container class="timer-value" :style="{width: timePercentage}"></v-container>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                maxTime: 10,
                currentTime: 0,
            };
        },

        computed: {
            timePercentage() {
                return this.currentTime/this.maxTime*100 + '%';
            }
        },

        watch: {
            currentTime() {
                if(this.currentTime >= 0) {
                    setTimeout(() => {
                        this.currentTime -= 1;
                    }, 1000)
                }
                else {
                    this.resetTimer();
                }
            }
        },

        methods: {
            resetTimer() {
                this.currentTime = 10;
            }
        },

        mounted() {
            this.resetTimer();
        }
    }
</script>


<style scoped>

    .timer-bar {
        padding: 0;
        background-color: #242424;
    }

    .timer-value {
        background-color: lightgreen;
        transition-duration: 1s;
        transition-timing-function: linear;
    }
  
</style>