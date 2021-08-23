<template>
    <v-app-bar density="compact">
        <v-app-bar-title>
            Song Guesser
        </v-app-bar-title>
    
        <v-spacer></v-spacer>
    
        <v-btn text>Help</v-btn>    
        <v-btn class="mr-3" text>About</v-btn>
    
        <v-divider inset vertical></v-divider>
    
        <v-btn @click="logout" class="mr-4 ml-5" color="primary" plain>
            <v-icon left>mdi-logout-variant</v-icon>        
            <span>Logout</span>
        </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        methods: {
            logout() {
                //TODO: Confirmation alerts
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped>
    nav {
        width: 100%;
        
        background-color: black;
        border: 2px solid black;
        box-shadow: 0 0 10px black;
        color: white;

        display: flex;
        flex-direction: row;
        align-content: space-between;
        justify-content: space-between;
        justify-self: flex-start;
    }

    p {
         margin: auto 5%;
         font-size: 1.5em;
    }

</style>
