<template>
    <v-container class="justify-center">
        <v-row>
            <v-col class="justify-center">
                <h1 class="text-center">Who was the lead singer of rock band "Queen"?</h1> <!--TODO: Spotify as prop-->
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn @click="checkAns('ansA')" height="35vh">A. Curt Cobain</v-btn>
            </v-col>
            <v-col>
                <v-btn @click="checkAns('ansB')" height="35vh">B. Eric Cartman</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn @click="checkAns('ansC')" height="35vh">C. Freddie Mercury</v-btn>
            </v-col>
            <v-col>
                <v-btn @click="checkAns('ansD')" height="35vh">D. Philip Tentacles</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

</script>

<style scoped>
    button {
        width: 100%;
        height: 100%;
        font-size: 1.5em;
    }
    table {
        width: 100%;
        height: 100%;
        text-align: center;
    }
    tr {
        width: 50%;
        height: 40%;
    }
    .caption {
        width: 50%;
        height: 10%;
    }

    td {
        width: 50%;
        height: 40%;
    }
</style>
