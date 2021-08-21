<template>
    <div class="timer-bar">
        <div class="timer-value" :style="{width: timePercentage}">
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                maxTime: 10,
                currentTime: 10,
            };
        },
        computed: {
            timePercentage() {
                return this.currentTime/this.maxTime*100 + '%';
            }
        },
        methods: {
            countDown() {
                if(this.currentTime >= 0) {
                    setTimeout(() => {
                        this.currentTime -= 1;
                        this.countDown();
                    }, 1000)
                }
                else {
                    this.currentTime = 10;
                }
            },
        },
        mounted() {
            this.countDown();
        }
    }
</script>


<style scoped>
    div {
        height: 7px;
    }

    div.timer-bar {
        background-color: grey;
        width: 100%;
    }

    div.timer-value {
        background-color: lightgreen;
        transition-duration: 1s;
        transition-timing-function: linear;
    }
  
</style>