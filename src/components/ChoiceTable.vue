<template>
    <table>
        <tr class="caption">
            <td colspan="2" class="caption">
                <h1>Who was the lead singer of rock band "Queen"?</h1> <!--TODO: Spotify as prop-->
            </td>
        </tr>
        <tr>
            <td>
                <button @click="checkAns('ansA')">A. Curt Cobain</button>
            </td>
            <td>
                <button @click="checkAns('ansB')">B. Eric Cartman</button>
            </td>
        </tr>
        <tr>
            <td>
                <button @click="checkAns('ansC')">C. Freddie Mercury</button>
            </td>
            <td>
                <button @click="checkAns('ansD')">D. Philip Tentacles</button>
            </td>
        </tr>
    </table>
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
