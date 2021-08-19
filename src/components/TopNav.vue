<template>
    <div>
        <nav>
            <p>Hello, {{ activeUser }}</p>
            <button>Logout</button>
        </nav>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            activeUser: String,
        }
    }
</script>

<style>

    nav {
        background-color: black;
        border: 2px solid black;
        box-shadow: 0 0 10px black;
        color: white;

        display: flex;
        flex-direction: row;
    }

</style>
