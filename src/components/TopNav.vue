<template>
    <nav>
        <p>*nickname*</p>
        <p>Song Guesser</p>
        <button @click="logout">Logout</button>
    </nav>
</template>

<script>
    export default {
        methods: {
            logout() {
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped>
    button {
        height: auto;
        width: 10%;
        margin: 3px 5%;

        background-color: #191414;
        border-radius: 100px;

        color: white;
        text-align: center;
        font-size: 1.5em;
        font-weight: bold;
    }

    button:hover {
        background-color: #333;
    }

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
